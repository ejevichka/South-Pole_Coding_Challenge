import { useRef, useEffect } from 'react';
import { Button, Box, Input, Checkbox } from '@chakra-ui/react';
import { Controller, Control } from 'react-hook-form';
import Select from 'react-select'

interface StepperLayoutProps {
    control: Control;
    handleClick: () => void;
    setValue: (name: string, value: any) => void;
}
interface Airport {
    value: string;
    label: string;
}

const airports: Airport[] = [
    { value: 'DOH', label: 'Hamad International Airport(DOH)' },
    { value: 'HND', label: 'Haneda Airport(HND)' },
    { value: 'SIN', label: 'Singapore Changi Airport(SIN)' },
    { value: 'ICN', label: 'Incheon International Airport(ICN)' },
    { value: 'NRT', label: 'Narita International Airport(NRT)' },
    { value: 'MUC', label: 'Munich Airport(MUC)' },
    { value: 'ZRH', label: 'Zurich Airport(ZRH)' },
    { value: 'LHR', label: 'Heathrow Airport(LHR)' },
    { value: 'KIX', label: 'Kansai International Airport(KIX)' },
    { value: 'HX', label: 'Hong Kong International Airport(HX)' },
];


const StepperLayout: React.FC<StepperLayoutProps> = ({ control, handleClick, setValue }) => {

    const firstInputRef = useRef<Select | null>(null);
    const secondInputRef = useRef<Select | null>(null);
    const thirdInputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (firstInputRef.current) {
            //firstInputRef.current.focus();
        }
    }, []);


    const handleSetValueAndFocus = (ref: React.RefObject<Select | HTMLInputElement>, field: string, value: any) => {
        setValue(field, value);
        if (ref.current) {
            //ref.current.focus();
        }
    };

    return (
        <Box gap="0">
            <Controller
                name={'searchSelect1'}
                control={control}
                defaultValue={{ value: '', label: 'From*' }}
                render={({ field }) => (
                    <Select
                        options={airports}
                        {...field}
                        ref={(e) => {
                            field.ref(e);
                            //firstInputRef.current = e;
                        }}
                        onChange={(selectedOption) => {
                            field.onChange(selectedOption);
                            handleSetValueAndFocus(secondInputRef, field.name, selectedOption);
                        }}
                    />
                )}
            />
            <Controller
                name={'searchSelect2'}
                control={control}
                defaultValue={{ value: '', label: 'To*' }}
                render={({ field }) => (
                    <Select
                        options={airports}
                        {...field}
                        ref={(e) => {
                            field.ref(e);
                            //secondInputRef.current = e;
                        }}
                        onChange={(selectedOption) => {
                            field.onChange(selectedOption);
                            handleSetValueAndFocus(thirdInputRef, field.name, selectedOption);
                        }}
                    />
                )}
            />

            <Controller
                name="roundTrip"
                control={control}
                defaultValue="true"
                render={({ field }) => <Checkbox  {...field} colorScheme='green' defaultChecked>
                    RoundTrip
                </Checkbox>}
            />

            <Controller
                name="numOfTravellers"
                control={control}
                defaultValue="1"
                render={({ field }) => <Input
                    {...field}
                    placeholder="1"
                    ref={(e) => {
                        field.ref(e);
                        thirdInputRef.current = e;
                    }}
                />
                }
            />

            <Button onClick={handleClick}>Submit</Button>
        </Box>
    );
};

export default StepperLayout;
