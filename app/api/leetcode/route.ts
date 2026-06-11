import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = `
    query userProfileCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: "saadksioui",
      },
    }),
  });

  const result = await response.json();

  const calendar = JSON.parse(
    result.data.matchedUser.userCalendar.submissionCalendar
  );

  return NextResponse.json(calendar);
}