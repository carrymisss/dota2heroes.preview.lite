import React from 'react'
import { Card } from 'antd'

const Loader = () => {
	return (
		<>
		<div className="loader-card__wrapper">
			<Card className="loader-card">
				<div className="spinner-wrapper">
					<div className="ispinner ispinner-large" style={{ transform: 'scale(2)' }}><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div><div className="ispinner-blade"></div></div>
				</div>
			</Card>
		</div>
		</>
	)
}

export default Loader
