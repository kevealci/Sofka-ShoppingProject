import React from 'react'
import { Image } from './Image'

export const Header = () => {

    return (
        <>
            <div className="card-header bg-transparent border-success">
                <Image classes={"card-img-top"} src={"https://pixabay.com/get/ge732eaa5c53b9bb8ad7f606df83ca4cafc91bf1cb11ec253202f7ff23bc664d96b315afa47c5967cf8febd1c0e94ec2ea790b1f4402471e0dffc080777ae4043c99e39034718d415788e71067555146e_1920.jpg"}></Image>
            </div>
        </>
    )
}
