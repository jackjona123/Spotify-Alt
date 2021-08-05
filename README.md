# Spotify-Clone

An alternative Spotify front-end, built with React js and the Spotify API. This can also be installed as a Progressive Web App (PWA).

## Deloyment 

View The Live Site [Here](https://spotify-clone.jackjona.live).

## Software

- React
- Spotify API (Spotify Web API)


## To Develop Locally

- Create a ```.env``` file in your project Root Directory with your Client ID and Redirect URL (template found below)
- Replace the Client ID and Redirect URL in App.js
- Add your Redirect URL in the Redirect URI section found in your Spotify Developer Dashboard

```
yarn
yarn start
visit http://localhost:3000
```

### .env Template

```
REACT_APP_CLIENT_ID=01010101010101010101ABCD
REACT_APP_CLIENT_ID_REDIRECT_URL=http://localhost:3000/callback
```

## Current Limitation:

The audio player only plays 30 seconds of audio currently. A fix for this would be The Web Playback SDK. However, that requires a premium account so that has not been used. If it was, it would allow premium Spotify users to play the full audio, but lock out free users. 

### To Do

Look into the possibility of using/implementing both the current Spotify API and the Web Playback SDK so that free users can fallback to the original API while premium users can use the Web Playback SDK

#### [LICENSE.md](https://github.com/jackjona123/Spotify-Clone/blob/v1/LICENSE)
Released under the GPL-3.0 License.

#### Credits

[Keitoto](https://dribbble.com/shots/15060139-Rungon-Music-Streaming-Dashboard)
[Flatstudio](https://dribbble.com/shots/15528846-Mp3million-My-music-my-storage-space)
[Sandro Tavartkiladze](https://dribbble.com/shots/5837092-Playcloud-Online-Music-Streaming)
[CleverProgrammer](https://github.com/CleverProgrammers/spotify-clone)
[andrepv](https://github.com/andrepv/spotify-react)
[Pau1fitz](https://github.com/Pau1fitz/react-spotify)
