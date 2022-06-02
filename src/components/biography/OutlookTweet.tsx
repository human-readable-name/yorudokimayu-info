import React from "react";
import Sciprt from "next/script";
const OutlookTweet: React.FC = () => {
    return <>
        <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">さいこ〜にかわいいぼくを見て💜<a href="https://twitter.com/hashtag/Vtuber%E3%81%AE%E4%B8%89%E9%9D%A2%E5%9B%B3%E3%81%8C%E7%9F%A5%E3%82%8A%E3%81%9F%E3%81%84?src=hash&amp;ref_src=twsrc%5Etfw">#Vtuberの三面図が知りたい</a> <a href="https://t.co/VhcCGWQEnn">pic.twitter.com/VhcCGWQEnn</a></p>&mdash; 拠鳥きまゆ💜🐧⚡ (@461Okmy) <a href="https://twitter.com/461Okmy/status/1379360361720127489?ref_src=twsrc%5Etfw">April 6, 2021</a></blockquote> 
        <Sciprt async src="https://platform.twitter.com/widgets.js" />
    </>
};

export default OutlookTweet;