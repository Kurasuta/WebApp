import React, {useEffect, useState} from "react";
import NewestHashesList from "../components/NewestHashesList";
import RandomHashesList from "../components/RandomHashesList";
import {css} from "glamor";
import Hash from "../components/ui/Hash";
import KurasutaApi from "../KurasutaApi";

export default function Home() {
    const [sampleCount, setSampleCount] = useState(null);
    const [sectionCount, setSectionCount] = useState(null);
    const [resourceCount, setResourceCount] = useState(null);

    useEffect(() => {
        new KurasutaApi().count().then((result) => {
            setSampleCount(result.data.samples);
            setSectionCount(result.data.sections);
            setResourceCount(result.data.resources);
        });
    }, []);

    return (
        <div {...(css({
            display: 'grid',
            gridTemplateColumns: '470px 470px',
            gridTemplateAreas: `
                "bluf bluf"
                "what support"
                "how example"
                "random random"
                "newest newest"
            `,
            gridGap: 20,
            '> div:not(:first-child)': {
                borderTop: '1px solid #979797',
                ' h2': {
                    textTransform: 'uppercase',
                    fontSize: 16,
                    marginTop: 8
                }
            }
        }))}>
            <div {...(css({
                gridArea: 'bluf',
                fontSize: 48,
                margin: '40px 0',
                width: 593
            }))}>Try to say the English word Cluster with a strong Japanese accent.
            </div>
            <div>
                <h2>What is Kurasuta?</h2>
                <p>The core/first use-case of this project is straight forward: hash sections of as many PE files as
                    possible and make pivoting possible. This website is a first client consuming a REST-like API to
                    the
                    Kurasuta database. That database contains extracted info on as many PE files as we could get our
                    hands on so
                    far.</p>
                <p>We already processed around {sampleCount === null
                    ? <img alt="loading" src="/loader.gif" width={16} height={16}/> : sampleCount} samples. In total
                    those samples
                    contain {sectionCount === null
                        ? <img alt="loading" src="/loader.gif" width={16} height={16}/> : sectionCount} sections
                    and {resourceCount === null
                        ? <img alt="loading" src="/loader.gif" width={16} height={16}/> : resourceCount} resources.</p>
            </div>
            <div>
                <h2>Support us</h2>
                <p>There are, of course, many ideas around this project: More samples, machine learning, more
                    dimensions
                    to pivot around, UI improvements, API documentation... we are currently working on a few. If you
                    have any
                    suggestions, feel free to reach out! If you have more sweet samples to process, definitely
                    contact us.</p>

                <p>All the <a href="https://github.com/Kurasuta">code running Kurasuta is available on github</a>.
                    Contributions are welcome. There is no documentation. We are tired of licences.</p>
            </div>
            <div>
                <h2>How does it work?</h2>
                <p>Just put a SHA256 hash of a sample into the text box and - in case we already processed that
                    sample - get
                    back some information on the corresponding PE file together with a list of sections. Clicking on
                    the SHA256
                    hash of a section shows a list of samples also containing that section.</p>
            </div>
            <div>
                <h2>Examples</h2>
                <ul>
                    <li>The .text section
                        of <Hash>4c532831a492614f3b7e85966a6cf45c9bcc19c33bd66ccde978f0ebfccacc7b</Hash> occurs in 3
                        different samples that all have the same build time stamp.
                    </li>
                    <li>
                        The .rscr section
                        of <Hash>fd2dca2dec23ffeb2002a2b2cc03d99c385691ce35663322e396fee33d68bcaa</Hash>
                        occurs in a lot of samples with very different build timestamps.
                    </li>
                </ul>
            </div>
            <div {...(css({
                gridArea: 'newest',
                marginBottom: 100
            }))}>
                <h2>Newest ten samples</h2>
                <NewestHashesList/>
            </div>
            <div {...(css({
                gridArea: 'random',
            }))}>
                <h2>Ten random samples</h2>
                <RandomHashesList/>
            </div>
        </div>
    );
}
