import React, { useState } from "react";

type Props = {
    tracks: string[];
    extraTracks: string[];
};

const TrackList: React.FC<Props> = ({tracks, extraTracks}: Props) => {
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
            {
                extraTracks.map((extraTrack, index) => {
                    return <li className={`text-sm`} key={`ex-index`}>{`Ex${index+1} ${extraTrack}`}</li>}
                )
            }
        </ol>
    </>;
};

export default TrackList;