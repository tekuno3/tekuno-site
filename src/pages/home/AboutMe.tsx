import { Paper, DetailList, Detail, Anchor } from "@src/components";

export function AboutMe() {
    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail title={<h2 css={{ fontWeight: 'bold', }}>自己紹介</h2>}>
                        <DetailList>
                            <Detail title={<p>名前</p>}>
                                <p>てく野</p>
                            </Detail>
                        </DetailList>
                        <p>描いた絵をpixivなどにアップロードすることがあります</p>
                        <p>オリジナルキャラクターの絵がほとんどです</p>
                        <p>あとゲームとかします</p>
                        <p>2024年5月からいど子さんと<Anchor href="#">ラジオ</Anchor>をしています</p>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
