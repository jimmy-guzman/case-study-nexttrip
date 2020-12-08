import React from 'react'
import {
  FormControl,
  createStyles,
  makeStyles,
  Theme,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'

import { SelectOption } from '../../interfaces'

interface DropdownProps {
  id: string
  onSelected: (selectedRoute: string) => void
  options: SelectOption[]
  selected: string
  title: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      width: '100%',
    },
  })
)

export const Dropdown = ({
  options,
  selected,
  onSelected,
  title,
  id,
}: DropdownProps) => {
  const classes = useStyles()
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onSelected(event.target.value as string)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={`${id}-label`}>{title}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={selected}
        onChange={handleChange}
      >
        {options.map(({ value, text }) => {
          return (
            <MenuItem key={value} value={value}>
              {text}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
