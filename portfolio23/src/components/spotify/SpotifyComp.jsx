import React from 'react';
import SvgComponent from './SvgComponent';
import { SpotifyCompWrapper, SpotifyIntro } from './soundsStyles';
import coffee from "./coffee.png";
import radio from "./radio.png";

function SpotifyComp() {
  return (
    <SpotifyCompWrapper className="wrapper">
      <SvgComponent />
      <SpotifyIntro>
        <div className="intro__left">
          <p>
            All of my creations wouldn&apos;t be possible without two things.
            <br />
            1) Espressos{" "}
            <span>
              <img src={coffee} alt="Coffee" />
            </span>
            <br />
            2) House Music{" "}
            <span>
              <img src={radio} alt="Coffee" />
            </span>
          </p>
          <p>
            I'm a big believer in the power of music to inspire and motivate.
            When I'm coding, I need music that is upbeat and energetic, but also
            not too distracting. My go-to coding playlist is a mix of
            electronic, indie, and hip-hop tracks that keeps me focused and
            productive.
          </p>
          <p>
            Together, coffee and music make the perfect coding duo. I hope you
            enjoy my Spotify coding playlist! And if you have any suggestions
            for other tracks that I should add, please let me know.
          </p>
        </div>
        <div className="intro__right">
          <iframe
            title="Spotify Embed"
            src="https://open.spotify.com/embed/playlist/0gFsp1Dqf4H7TGlPtLZ7d5?utm_source=generator&theme=0"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </SpotifyIntro>
    </SpotifyCompWrapper>
  );
}

export default SpotifyComp;
