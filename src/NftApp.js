import React from 'react'
import Clock from './images/icon-clock.svg'
import Ether from './images/icon-ethereum.svg'
import View from './images/icon-view.svg'
import Photo from './images/image-avatar.png'
/*<img src={View} className="nft__iconRight" />*/

export const NftApp = () => {
    return (
        <div className="nft__containerCard">
            <div className="nft__containerCard2">
                
                <div className="nft__imageCard">
                    <img src={View} className="nft__iconView" />
                </div>
            <h1 className="nft__h1">
                Equilibrium #3429
            </h1>
            <p className="nft__text">
                Our equilibrium collection promates <br />balance and calm.
            </p>
            <div className="nft__containerData"> 
                <div className="nft__dataLeft">
                    <img src={Ether} className="nft__iconLeft" />

                    <h4 className="nft__textLeft">
                        0.041 ETH
                    </h4>
                </div>
                <div className="nft__dataRight">
                    <img src={Clock} className="nft__iconRight" />

                    <h4 className="nft__textRight">
                        3 days left
                    </h4>
                </div>                
            </div>
            <div className="nft_footerCard">
                <img src={Photo} className="nft__iconFooter" />
                <p className="nft__footerText"> Creation of <span >Jules Wyvern</span></p>
            </div>
            </div>
        </div>
    )
}
