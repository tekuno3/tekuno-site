import { Paper, DetailList, Detail } from "@src/components";

export function ContentLinks() {
    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail title={<h2 css={{ fontWeight: 'bold', }}>コンテンツ</h2>}>
                        <p>おもち</p>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
