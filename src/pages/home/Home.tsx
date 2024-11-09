import { Paper } from "@src/components/Paper";
import { Stack } from "@src/components/Stack";

export interface HomeProps {

}

export function Home({ }: HomeProps) {
    return (
        <Stack
            direction="vertical"
            spacing={2}
            css={{ height: '100vh', width: '100%', }}
        >
            <Paper>
                あああああ
            </Paper>
        </Stack>
    );
}
