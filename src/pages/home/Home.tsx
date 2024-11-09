import { useState } from "react";
import { Stack, Paper, } from "@src/components";
import { randInt } from "@src/utilities";
import { AboutMe } from "./AboutMe";
import { SnsLinks } from "./SnsLinks";
import { ContentLinks } from "./ContentLinks";
import { Banners } from "./Banners";

export interface HomeProps {

}

export function Home({ }: HomeProps) {
    const iconNames = ['me_angry.png', 'me_cry.png', 'me_horrified.png', 'me_none.png', 'me_smile.png', 'me_sweat.png', 'me_what.png',] as const;
    const randomIndex = randInt(0, iconNames.length);
    const [shownIcon, setShownIcon] = useState<Exclude<typeof iconNames[number], undefined>>(iconNames[randomIndex]);

    return (
        <Stack
            direction="vertical"
            spacing="16px"
            css={{ width: '100%', }}
        >
            <Paper>
                <h1 css={t => ({
                    fontSize: t.fonts.size.large,
                    fontWeight: 'bold',
                    textAlign: 'center',
                })}>
                    てく野のサイト
                </h1>
            </Paper>
            <Paper css={{ position: 'relative', }}>
                <img
                    src={`/images/home/${shownIcon}`}
                    css={{
                        display: 'block',
                        height: '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 'auto',
                    }}
                />
            </Paper>
            <AboutMe />
            <SnsLinks />
            <ContentLinks />
            <Banners />
        </Stack>
    );
}
