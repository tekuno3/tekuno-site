import { Paper, DetailList, Detail } from "@src/components";

export function Banners() {
    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail>
                        <h2 css={{ fontWeight: 'bold', }}>リンク・バナー</h2>
                        <p>おもち</p>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
