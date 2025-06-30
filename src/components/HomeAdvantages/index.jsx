import { useState, useEffect} from 'react'
import FormButton from '../FormButton';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

import advantagesList from '../../services/api.advantages'


export default function HomeAdvantages() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='advantages_section' >
      <div className='advantages_section_top'>
        <div className='advantages_left'>
          <h2>Por que escolher a Motion?</h2>
        </div>
        <div className='advantages_accordion'>
          <Accordion defaultActiveKey="0">
            {advantagesList.map((item) => (
              <Accordion.Item key={item.id} eventKey={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      <div className='advantages_section_bottom'>
        <FormButton classe="text_300" />
      </div>
    </section>
  )
}
