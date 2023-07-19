import { StyledButton } from '~/lib/components/styled-components/StyledButton'
import Link from 'next/link'

export function LinkedButton() {
    return (
        <Link href="https://market.southpole.com/home/offset-emissions" passHref={true}>
            <StyledButton
                data-testid="TotalAmountCO2"
            >Compensate
            </StyledButton>
        </Link>
    )
}