import React from 'react'
import '../commoncss/weadingloaction.css'

const Weadingloaction = () => {
    return ( 
	<section className="section w-details-areaa center-text" id='weadingDate'>
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Waktu & Tempat</h2>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<div className='weading__me'>
								<i className="icon icon-ciurclke"></i>
								<h4 className="title">Akad Nikah</h4>
								<p>Minggu, 3 Juli 2022</p>
								<p>Pukul 08.00 WIB - 11.00 WIB</p>
							</div>
						</div>  
						
						<div className="w-detail left">
							<div className='weading__me'>
								<i className="icon icon-cake"></i>
								<h4 className="title">Resepsi</h4>
								<p>Pukul 11.00 WIB - Selesai</p>
							</div>
						</div> 

						<div className="w-detail right">
							<div className='weading__me'>
								<i className="icon icon-email-plane"></i>
								<h4 className="title">Tempat</h4>
								<span>Dusun Karang tengah RT. 003 RW. 017 desa Imbanagara kec.kab Ciamis</span>
							</div>
						</div> 

					</div>
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;