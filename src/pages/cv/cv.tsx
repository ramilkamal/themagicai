import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
  FormControl,
  OutlinedInput,
  SelectChangeEvent,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
  Autocomplete,
  TextField,
} from '@mui/material';
import { useNavigate, redirect } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { selectData } from './cv-data';
import styles from './styles.module.scss';

export const CVPage: React.FC = () => {
  const [age, setAge] = useState<string>('');
  const navigate = useNavigate();
  const token = Cookies.get('access');

  const handleChange = (event: SelectChangeEvent) =>
    setAge(event.target.value as string);

  // useEffect(() => {
  //     if (!token) redirect("/");
  // }, [token]);

  return (
    <div className={styles.cv}>
      <div className={styles.cvContainer}>
        <div className={styles.cvCont}>
          <div className={styles.vacancyRequirement}>
            <h1>Vacancy requirement</h1>
            <div className={styles.twoTextField}>
              <OutlinedInput
                type="text"
                color="secondary"
                placeholder="Enter company name"
                required
                size="small"
                className={styles.OutlinedInput}
              />
              <OutlinedInput
                type="Email"
                color="secondary"
                placeholder="Enter position"
                required
                size="small"
                className={styles.OutlinedInput}
              />
            </div>
            <TextareaAutosize
              className={styles.TextareaAutosize}
              placeholder="Enter vacancy requirement"
              required
              autoFocus={false}
            />
          </div>
          <div className={styles.personalInformation}>
            <h1>Personal information</h1>
            <div className={styles.BoxPersonalInputs}>
              <FormControl className={styles.FormControlInputLabel}>
                <InputLabel className={styles.InputLabel} size="small">
                  Grade
                </InputLabel>
                <Select
                  color="secondary"
                  size="small"
                  label="Grade"
                  displayEmpty
                  className={styles.Select}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem className={styles.MenuItem}>Specialist</MenuItem>
                  <MenuItem className={styles.MenuItem}>Manager</MenuItem>
                  <MenuItem className={styles.MenuItem}>
                    Senior manager
                  </MenuItem>
                  <MenuItem className={styles.MenuItem}>Head</MenuItem>
                  <MenuItem className={styles.MenuItem}>Director</MenuItem>
                  <MenuItem className={styles.MenuItem}>Executive</MenuItem>
                  <MenuItem className={styles.MenuItem}>Other...</MenuItem>
                </Select>
              </FormControl>
              <Autocomplete
                className={styles.Autocomplete}
                multiple
                size="small"
                options={selectData}
                getOptionLabel={(option) => option.title}
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                defaultValue={[selectData[0]]}
                filterSelectedOptions
                renderInput={(params: any) => (
                  <TextField
                    className={styles.TextField}
                    {...params}
                    placeholder="Skills"
                    color="secondary"
                  />
                )}
              />
            </div>
            <TextareaAutosize
              className={styles.TextareaAutosize}
              placeholder="Enter summary about yourself, job experience, education, licenses & certifications..."
              required
            />
            <div className={styles.Buttons}>
              <Button className={styles.Button1} variant="contained">
                Get cover letter
              </Button>
              <Button className={styles.Button2} variant="contained">
                Get CV
              </Button>
            </div>
          </div>
          <div className={styles.result}>
            <h1>Result</h1>
            <TextareaAutosize className={styles.TextareaAutosize} disabled />
            <div className={styles.Box}>
              <Button variant="contained" className={styles.Button}>
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
