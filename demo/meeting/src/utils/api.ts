// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

interface MeetingResponse {
  JoinInfo: {
    Attendee: any;
    Meeting: any;
  };
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export async function fetchMeeting(
  name = 'Anonymous',
  meetingId = uuidv4()
): Promise<MeetingResponse> {
  const response = await fetch(
    `/join?title=${encodeURIComponent(
      meetingId
    )}&name=${encodeURIComponent(name)}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();

  if (data.error) {
    throw new Error(`Server error: ${data.error}`);
  }

  return data;
}

export function createGetAttendeeCallback(meetingId: string) {
  return async (chimeAttendeeId: string, externalUserId?: string) => {
    const attendeeUrl = `/attendee?title=${encodeURIComponent(
      meetingId
    )}&attendee=${encodeURIComponent(chimeAttendeeId)}`;
    const res = await fetch(attendeeUrl, {
      method: 'GET'
    });

    if (!res.ok) {
      throw new Error('Invalid server response');
    }

    const data = await res.json();

    return {
      name: data.AttendeeInfo.Name
    };
  };
}

export async function endMeeting(meetingId: string) {
  const res = await fetch(
    `/end?title=${encodeURIComponent(meetingId)}`,
    {
      method: 'POST'
    }
  );

  if (!res.ok) {
    throw new Error('Server error ending meeting');
  }
}
