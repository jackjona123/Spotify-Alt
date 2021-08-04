# Spotify Clone - v1

This is a Spotify front end clone built with React and the Spotify API.

## Deloyment 

View The Live Site [Here](https://spotify-v1.jackjona.live).

## Software

- React
- Spotify API

## To Develop Locally

- Replace the Client ID and Redirect URL in App.js
- Add your Redirect URL in the Redirect URI section found in your Spotify Developer Dashboard

```
npm install
yarn start
visit http://localhost:3000

```

To View The Native Application (Electron App ), Use `yarn run electron-start`.

## Current Limitation:

The audio player only plays 30 seconds of audio currently. A fix for this would be The Web Playback SDK. However, that requires a premium account so that has not been used. If it was, it would allow premium Spotify users to play the full audio, but lock out free users. 

### To Do

Look into the possibility of using/implementing both the current Spotify API and the Web Playback SDK so that free users can fallback to the original API while premium users can use the Web Playback SDK

#### [LICENSE.md](https://github.com/jackjona123/Spotify-Clone/blob/v1/LICENSE)
Released under the GPL-3.0 License.

#### Credits

[CleverProgrammer](https://github.com/CleverProgrammers/spotify-clone)
[Pau1fitz](https://github.com/Pau1fitz/react-spotify)