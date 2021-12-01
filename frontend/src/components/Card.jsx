import React from 'react'



const Card = () => {
    
    const styles = {
        width: '18rem'
    };

    return (
        <div className="col mt-4">
            <div className="card" style={styles} >
                <img src="https://pixabay.com/get/ge732eaa5c53b9bb8ad7f606df83ca4cafc91bf1cb11ec253202f7ff23bc664d96b315afa47c5967cf8febd1c0e94ec2ea790b1f4402471e0dffc080777ae4043c99e39034718d415788e71067555146e_1920.jpg" className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;

