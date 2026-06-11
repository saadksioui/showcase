import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const query = `
        query($login: String!) {
        user(login: $login) {
            contributionsCollection {
            contributionCalendar {
                weeks {
                contributionDays {
                    date
                    contributionCount
                    color
                }
                }
            }
            }
        }
        }
    `;
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: { login: "saadksioui" },
        }),
    });
    const data = await response.json();
    return NextResponse.json(data);
}