import { Paper } from "@src/components/Paper";
import { Stack } from "@src/components/Stack";

export interface HomeProps {

}

export function Home({ }: HomeProps) {
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
            <Paper>
                ああああ
            </Paper>
            <Paper>
                ああああ
            </Paper>
            <Paper>
                ああああ
            </Paper>
        </Stack>
    );
}
