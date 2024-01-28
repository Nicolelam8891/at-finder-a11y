import './LearnAT.css'
import { useEffect } from 'react'

function LearnAT() {

	useEffect(() => {
		document.title = 'Learn About AT - AI AT Ally';
	  }, [])

    return (
			<div className="content-container">
			<h2 className="assistive-tech-h2">What is Assistive Technology?</h2>
			<div className='assistive-tech-information'>
				<p>
					In the United States, it is legally required that assistive technology be considered as a support for students with disabilities served under the <a href="https://sites.ed.gov/idea/regs/b/a/300.5" target="_blank" rel="noopener noreferrer" className="learnat-a">Individuals with Disabilities Act (2004)</a>. This law states that an, “Assistive technology device means any item, piece of equipment, or product system, whether acquired commercially off the shelf, modified, or customized, that is used to increase, maintain, or improve the functional capabilities of a child with a disability. The term does not include a medical device that is surgically implanted, or the replacement of such device.”
				</p>
				<p>
					Assistive technologies work best when paired with digital products that are designed to meet the latest version of the <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer" className="learnat-a">Web Content Accessibility Guidelines</a>, developed and maintained by the World Wide Web Consortium (W3C). When implemented correctly, accessible and inclusive design can improve the user experience for everyone. The W3C's <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="learnat-a">Web Accessibility Initiative (WAI)</a> is an excellent resource for learning more about accessibility.
				</p>
			</div>
			<h2 className="examples-tech-h2">Examples of Assistive Technologies</h2>
			<p className='examples-assistive-tech'>The following lists provide a small sample of types of assistive technologies. Some Assistive Technologies are free and are built into operating systems, either natively or through plugins. Others can be purchased as separate applications or devices.</p>
			<h3 className="learnat-h3">Blind and Low Vision</h3>
				<ul>
					<li>Screen Readers</li>
					<li>Refreshable Braille Displays</li>
					<li>Braille Notetakers</li>
					<li>Talking Calculators</li>
					<li>Braille Translation Software</li>
					<li>Braille Embossers</li>
					<li>Dynamic Tactile Graphics Displays</li>
					<li>Zoom / Magnification Software and Devices</li>
					<li>CCTVs</li>
					<li>Large Print Keyboards</li>
					<li>Large Monitors</li>
				</ul>
        	<h3 className="learnat-h3">Deaf and Hard of Hearing</h3>
				<ul>
					<li>Sign Language</li>
					<li>Closed Captioning and Subtitles</li>
					<li>Communication Access Readtime Translation (CART)</li>
					<li>Assistive Listening Devices</li>
					<li>Hearing Aids</li>
					<li>Relay Services</li>
					<li>Speech-to-Text</li>
					<li>Vibrating or Flashing Alert Systems</li>
				</ul>
			<h3 className="learnat-h3">Reading</h3>
				<ul>
					<li>Text-to-Speech Tools</li>
					<li>Digital Vocabulary Support</li>
					<li>eText Readers</li>
					<li>Screen Readers</li>
					<li>Color and Font Customization</li>
					<li>Text-to-Audio Conversion (Optical Character Recognition - OCR)</li>
					<li>Augmentative and Alternative Communication Devices</li>
				</ul>
        	<h3 className="learnat-h3">Writing and Spelling</h3>
				<ul>
					<li>Word Prediction Software</li>
					<li>Speech-to-Text</li>
					<li>Phonetic Spell Check</li>
					<li>Talking Word Processors</li>
					<li>Graphic Word Processors</li>
					<li>Concept Webbing</li>
					<li>Academic Suite Software</li>
					<li>Augmentative and Alternative Communication</li>
				</ul>
        	<h3 className="learnat-h3">Physical and Mobility</h3>
				<ul>
					<li>Alternative Keyboards</li>
					<li>Keyboard Modificatiopns</li>
					<li>Alternative Mice / Pointing Devices</li>
					<li>Mobility Devices</li>
					<li>Mounting System</li>
					<li>Switch Access Systems</li>
				</ul>
       		<h2 className="assistive-tech-education-h2">Assistive Technology and Accessible Educational Materials Resources</h2>
        		<ul>
					 {/* <img
				 className='learn-At-image'
				 alt='back home picture with branches'
				 src='https://sas.yale.edu/sites/default/files/styles/adaptive/adaptive-image/public/logo_0414_notitle_whitebg.png?itok=G4RgYb1P'
			 />	 */}
					<li><a href="https://aem.cast.org/get-started/resources/2021/aem-navigator" target="_blank" rel="noopener noreferrer" className="learnat-a">Accessible Educational Materials Navigator</a></li>
					<li><a href="https://www.atia.org/home/at-resources/what-is-at/" target="_blank" rel="noopener noreferrer" className="learnat-a">Assistive Technology Industry Association (ATIA)</a></li>
					<li><a href="https://aem.cast.org/get-started/defining-accessibility" target="_blank" rel="noopener noreferrer" className="learnat-a">CAST National Center on Accessible Educational Materials</a></li>
					<li><a href="https://www.washington.edu/doit/what-assistive-technology#:~:text=Assistive%20technology%20is%20technology%20used,otherwise%20be%20difficult%20or%20impossible." target="_blank" rel="noopener noreferrer" className="learnat-a">DO-IT: Disabilities, Opportunities, Internetworking, and Technology</a></li>
					<li><a href="https://gpat.gadoe.org/Georgia-Project-for-Assistive-Technology/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="learnat-a">Georgia Project for Assistive Technology (GPAT)</a></li>	
					<li><a href="https://at3center.net/state-at-programs/" target="_blank" rel="noopener noreferrer" className="learnat-a">National Assistive Technology ACT Programs in the United States</a></li>
				</ul>
        </div>
    )
}

export default LearnAT