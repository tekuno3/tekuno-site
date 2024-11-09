import { Paper, DetailList, Detail } from "@src/components";

export function AboutMe() {
    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail>
                        <h2 css={{ fontWeight: 'bold', }}>自己紹介</h2>
                        <p>おもち</p>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
