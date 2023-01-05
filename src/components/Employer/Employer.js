import React from 'react'
import Header from '../Header/Header'
import EmployerButtons from './EmployerButtons'
import Employer1 from './Employer1'
import Employer2 from './Employer2'


export default function Employer() {
  document.title = "Employer - Designo";
  return (
    <>
    <Header projectType="Employer" desc="We build websites that serve as powerful marketing tools and bring memorable brand
              experiences."/>
    <EmployerButtons/>
    <Employer1/>
    <Employer2/>
    </>
  )
}
