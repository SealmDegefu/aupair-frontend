import React from 'react'

function About() {
		const [name, setName] = useState('Your Name');
		const [role, setRole] = useState('Role');
		// const [name, setAbout] = useState('Your Name')
		const [name, setAbout] = useState('Born and raised in Addis Ababa, Ethiopia, Selam understands the core need in raising children in a diverse household. Her passion for connecting people and bridging cultural differences is what led her alongside her two co-founders to start Au Paird. When she is not busy leading her team, you can find her by the water enjoying time with family and friends.')



	return (
		<div className="About">
			<div className="upper-container">
				<div className="image-container">
						<img src=" " alt= "" height="100px" width="100px" />
				</div>
			</div>
			<div className="lower-container">
				<h3>( name )</h3>
				<h4>( role )</h4>
				<p> ( about ) </p>
			</div>
		</div>
	)
}

export default About
