# README - React Meeting Demo

This is the SDK react meeting demo app. It shows how to use the Amazon Chime SDK and Chime SDK UI Component Library to build a react meeting app.

## To run the demo app locally:

1. If you haven't already, [configure your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

2. Navigate to the meeting demo folder: `cd demo/meeting`

3. Run `npm run start`. This will start the webpack server for your React application and the Node server for making Chime API calls.

4. Open https://localhost:9000/ in your browser

## Exercise

Attempt to follow the [public documentation](https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/story/introduction--page) to build a meetings app.


### Boilerplate
This app is a bare bones React app, with react router installed. You will need to install the necessary dependencies, just as a builder would if they were starting out from scratch.

There is `fetchMeeting` function provided in the `/utils/api.ts` file. This will provide the AWS Chime reponse for creating a meeting and attendee. `fetchMeeting` defaults to using a UUID for the meeting title and an "Anonymous" username, but you can also hardcode these values or create a simple input to modify the values. You will need the use the same meeting title for multiple attendees to join the same meeting.

### Build an meetings app
Try to get a minimal meeting experience working using SDK components, hooks, or both. This includes...

- A way to start/stop your local video
- A way to mute/unmute yourself
- Showing the local video
- Showing the remote videos

If you complete this, feel free to try to add to your meetings app. This could include a devices preview screen that shows the user their local video preview, or a roster for the present attendees in the meeting.