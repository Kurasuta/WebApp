import React from "react";
import {css} from "glamor";
import Email from "../components/ui/Email";

export default function People() {
    return (
        <div {...(css({
            display: 'grid',
            gridTemplateColumns: '470px 470px',
            gridGap: 20,
            ' h2': {
                fontVariant: 'small-caps',
                fontSize: 16,
                marginTop: 8
            },
            '> div': {}
        }))}>
            <div>
                <h2>Thx!</h2>
                <p>Kurasuta would not exist if not for the help of many remarkable, brilliant and good people and
                    projects. Therefore we would like to thank the following alphabetically ordered entities and
                    many more
                    unnamed:</p>
                <ul>
                    <li><a href="https://github.com/amueller/word_cloud">Andreas Müller</a></li>
                    <li><a href="https://dasmalwerk.eu">dasmalwerk.eu</a></li>
                    <li><a href="https://david-badura.de">David Badura</a></li>
                    <li><a href="https://wallenborn.net">Lars Wallenborn</a></li>
                    <li><a href="https://malshare.com">malshare.com</a></li>
                    <li><a href="https://marcsn.de/">Marc Schulz-Narres</a></li>
                    <li><a href="https://maxeckhardt.com">Maximilian Eckhardt</a></li>
                    <li>Mirko</li>
                    <li><a href="https://nikno.de">Nikolai Nowaczyk</a> (Lead Data Scientist)</li>
                    <li><a href="https://github.com/ytisf/theZoo">theZoo</a></li>
                    <li><a href="https://tobias.goedderz.info">Tobias Gödderz</a></li>
                    <li><a href="https://virusshare.com/">VirusShare</a></li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <p>Whatever it is feel free to email us: <span>
            <Email user="ofni" domain="ten.atusaruk"/>&nbsp;[<a href="/pubkey.txt">GPG</a>]</span>.
                </p>
            </div>
        </div>
    );
}
