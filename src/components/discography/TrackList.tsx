import React, { useState } from "react";

type Props = {
    tracks: string[];
};

const TrackList: React.FC<Props> = ({tracks}: Props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const listVisibilityClassName = visible ? "visible" : "hidden";
    const buttonText = visible ? "Close track list -" : "Open track list +";
    const onButtonClick = () => {setVisible(!visible)};
    return <>
        <button onClick={onButtonClick} className="text-gray">{buttonText}</button>
        <ol className={`${listVisibilityClassName}`}>
            {
                tracks.map((track, index) => {
                    return <li className={`text-sm`} key={index}>{`Tr${index+1} ${track}`}</li>}
                )
            }
        </ol>
    </>;
};

export default TrackList;