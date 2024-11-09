import { Stack } from "@src/Components/Stack";

export interface HomeProps {

}

export function Home({ }: HomeProps) {
    return (
        <Stack
            direction="vertical"
            spacing={2}
            css={{ height: '100vh', width: '100%', }}
        >
            <div css={{ backgroundColor: 'gray', height: '200px', width: '200px' }}>1</div>
            <div css={{ backgroundColor: 'gray', height: '200px', width: '200px' }}>2</div>
            <div css={{ backgroundColor: 'gray', minHeight: '200px', width: '200px', flexGrow: 1, }}>3</div>
        </Stack>
    );
}
