import React from 'react'
import Link from 'next/link';
import { Heading, Button } from '@chakra-ui/react'
import CountingNumber from '~/lib/components/samples/CountingNumber'

function TotalAmountCO2({ CO2data }: any) {
  // const [selectedAirport, setSelectedAirport] = useState<string>('');
  // debounce would be needed here to handle changes more smothelly, 
  // but as far as we keep it simple and paste options from const, I decided not to implement debounce for current realisation 

  return (
    <>
      <Heading><CountingNumber to={CO2data} /> tonnes</Heading>
      
      <div>Your CO2 footprint</div>
      <Link href="https://market.southpole.com/home/offset-emissions" passHref={true}>
        <Button
         colorScheme={"southpole.button"}
        >Compensate</Button>
      </Link>
    </>
  );
}

export default TotalAmountCO2;
