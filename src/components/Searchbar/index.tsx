import { Box, Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { Field, useFormik, FieldProps, FormikProvider } from 'formik';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import * as yup from 'yup';
import format from 'date-fns/format';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { searchMedia } from '../../services/NasaService';
import { useMediaContext } from '../../context';
import { FormikValues } from './types';
import styles from './styles.module.scss';

const Searchbar = () => {
    const { setList } = useMediaContext();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleSubmit = ({ searchText, startDate, endDate }: any) => {
        navigate({
            pathname: '/',
            search: createSearchParams({
                searchText,
                ...(startDate ? { startDate } : {}),
                ...(endDate ? { endDate } : {}),
            }).toString(),
        });
    };
    const formik = useFormik<FormikValues>({
        initialValues: {
            searchText: '',
            startDate: null,
            endDate: null,
        },
        onSubmit: handleSubmit,
        validationSchema: yup.object({
            searchText: yup
                .string()
                .min(3, 'Text should be at least 3 characters')
                .required('Search Field is required'),
            startDate: yup.date().nullable(),
            endDate: yup.date().min(yup.ref('startDate'), 'End date must be older than start date').nullable(),
        }),
    });

    useEffect(() => {
        searchMedia('space')
            .then((res) => res.data)
            .then((res) => setList(res.collection.items));
    }, []);

    useEffect(() => {
        const text = searchParams.get('searchText');

        if (text) {
            searchMedia(text, searchParams.get('startDate'), searchParams.get('endDate'))
                .then((res) => res.data)
                .then((res) => setList(res.collection.items));
        }
    }, [searchParams]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box className={styles.searchBar}>
                <FormikProvider value={formik}>
                    <Field name="searchText">
                        {({ field, form: { touched, errors } }: FieldProps) => (
                            <TextField
                                placeholder="Search Nasa Media"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                className={styles.searchInput}
                                {...field}
                                error={touched.searchText && Boolean(errors.searchText)}
                                // @ts-ignore
                                helperText={touched.searchText && errors.searchText}
                            />
                        )}
                    </Field>
                    <Field name="startDate">
                        {({ field: { value }, form: { values, setFieldValue, touched, errors } }: FieldProps) => (
                            <MobileDatePicker
                                inputFormat="yyyy"
                                views={['year']}
                                label={!values.startDate && 'Start Date'}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        InputLabelProps={{ shrink: false }}
                                        error={touched.startDate && Boolean(errors.startDate)}
                                        helperText={touched.startDate && errors.startDate?.toString()}
                                    />
                                )}
                                InputProps={{
                                    className: styles.datePicker,
                                }}
                                value={value}
                                onChange={(value) => setFieldValue('startDate', format(new Date(value), 'yyyy'))}
                                className={styles.dateInput}
                            />
                        )}
                    </Field>
                    <Field name="endDate">
                        {({ field: { value }, form: { values, setFieldValue, touched, errors } }: FieldProps) => (
                            <MobileDatePicker
                                inputFormat="yyyy"
                                views={['year']}
                                label={!values.endDate && 'End Date'}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        InputLabelProps={{ shrink: false }}
                                        error={touched.endDate && Boolean(errors.endDate)}
                                        helperText={touched.endDate && errors.endDate?.toString()}
                                    />
                                )}
                                InputProps={{
                                    className: styles.datePicker,
                                }}
                                value={value}
                                onChange={(value) => setFieldValue('endDate', format(new Date(value), 'yyyy'))}
                                minDate={values.startDate}
                                className={styles.dateInput}
                            />
                        )}
                    </Field>
                    <Button variant="contained" className={styles.searchButton} type="submit">
                        Search
                    </Button>
                </FormikProvider>
            </Box>
        </form>
    );
};

export default Searchbar;
