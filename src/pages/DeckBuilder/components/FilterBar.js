import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import View from 'components/View'
import ManaFilter from './ManaFilter'
import ClassFilter from './ClassFilter'
import searchIcon from './search.png'

const FilterContainer = styled(View)`
  height: 40px;
  width: 100%;
`

const Input = styled('input')`
  background-color: transparent;
  width: 250px;
  height: 25px;
  border: none;
  flex: 1;
  border-radius: 0.25rem;
  color: rgba(200, 200, 200, 0.8);
  font-size: 1.2rem;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
  }
`

const InputWrapper = styled(View)`
  border-bottom: 2px solid rgba(200, 200, 200, 0.8);
  margin-right: 2rem;
`

FilterBar.propTypes = {
  manaEnabled: PropTypes.array.isRequired,
  classEnabled: PropTypes.bool.isRequired,
  neutralEnabled: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setManaEnabled: PropTypes.func.isRequired,
  setClassEnabled: PropTypes.func.isRequired,
  setNeutralEnabled: PropTypes.func.isRequired
}

export default function FilterBar ({
  manaEnabled,
  classEnabled,
  neutralEnabled,
  setFilter,
  filter,
  setManaEnabled,
  setClassEnabled,
  setNeutralEnabled
}) {
  return (
    <FilterContainer direction='row' justify='space-between' align='center'>
      <ClassFilter
        neutralEnabled={neutralEnabled}
        classEnabled={classEnabled}
        setNeutralEnabled={setNeutralEnabled}
        setClassEnabled={setClassEnabled}
      />
      <ManaFilter enabled={manaEnabled} setManaEnabled={setManaEnabled} />
      <InputWrapper direction='row' align='center'>
        <img src={searchIcon} height={15} />
        <Input
          type='text'
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </InputWrapper>
    </FilterContainer>
  )
}