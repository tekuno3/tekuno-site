import { Paper, DetailList, Detail } from "@src/components";

export function SnsLinks() {
    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail title={<h2 css={{ fontWeight: 'bold', }}>各SNSへのリンク</h2>}>
                        <p>おもち</p>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
