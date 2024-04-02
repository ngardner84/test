import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  form: FormGroup | null = null;
  formType: string = '';
  selection: string = '';
  formFieldGroups: string[] = [];

  constructor(private formService: FormService) { }

  formFieldNamesMapping: { [key: string]: string } = {
    'name': 'Name',
    'keyNumber': 'Key Number',
    'enrollmentApplication': 'Enrollment Application',
    'driverSocial': 'Driver Social',
    'citizenDocs': 'Citizen Docs',
    'hsDiploma': 'HS Diploma',
    'homeschoolCertificate': 'Homeschool Certificate',
    'docusignForms': 'Docusign Forms',
    'enrollmentAgreement': 'Enrollment Agreement',
    'contractAddendum': 'Contract Addendum',
    'kitList': 'Kit List',
    'understandingAidDisbursement': 'Understanding Aid Disbursement',
    'receiptOfDisclosures': 'Receipt of Disclosures',
    'masterSheet': 'Master Sheet',
    'ledgerCards': 'Ledger Cards',
    'verificationForm': 'Verification Form',
    'cFiles': 'C Files',
    'professionalJudgement': 'Professional Judgement',
    'ISIR': 'ISIR',
    'ISIRCorrections': 'ISIR Corrections',
    'creditBalanceForm': 'Credit Balance Form',
    'awardLetter': 'Award Letter',
    'entranceLoanCounseling': 'Entrance Loan Counseling',
    'masterPromNote': 'Master Promissory Note',
    'NSLDSPrintout': 'NSLDS Printout',
    'SAPForms': 'SAP Forms',
    'LOAandContractAddendum': 'LOA and Contract Addendum',
    'exitLoanCounseling': 'Exit Loan Counseling',
    'finalMasterSheet': 'Final Master Sheet',
    'refundNotice': 'Refund Notice',
    'refundCheck': 'Refund Check',
    'refundNoticeToStudent': 'Refund Notice to Student',
    'tuitionAccount': 'Tuition Account',
    'proofOfTrainingAndCompletionForms': 'Proof of Training and Completion Forms',
    'finalClockHourRGMPrintout': 'Final Clock Hour RGM Printout',
    'transcript': 'Transcript',
    'graduateSurvey': 'Graduate Survey',
  };
  

  formTitleNamesMapping: { [key: string]: string } = {
    'financialAid': 'Financial Aid Student Checklist',
    'cash': 'Cash Student Checklist',
    'va': 'VA Student Checklist'
  };

  radioOptions: string[] = [
    "Yes",
    "No",
    "N/A"
  ];



  onFormTypeChange(event: MatSelectChange) {
    this.formType = event.value;
    switch (this.formType) {
      case 'financialAid':
        this.form = this.formService.getFinancialAidStudentForm();
        console.log('this.form:', this.form)
        this.formFieldGroups = Object.keys(this.formService.getFinancialAidStudentForm().controls);
        console.log('formFieldGroups:', this.formFieldGroups)
        break;
      case 'cash':
        this.form = this.formService.getCashStudentForm();
        this.formFieldGroups = Object.keys(this.formService.getCashStudentForm().controls);
        break;
      case 'va':
        this.form = this.formService.getVaStudentForm();
        this.formFieldGroups = Object.keys(this.formService.getVaStudentForm().controls);
        break;
      default:
        this.form = null;
    }
  }

  getYesNoNa(form: FormGroup, fieldName: string): string {
    console.log('form.get(fieldName):', form.get(fieldName))
    return form.get(fieldName)?.value;
  }

  getFormFields(form: FormGroup): string[] {
    //console.log('form.controls:', form.controls)
    return Object.keys(form.controls);
  }

  getFormGroupWithName(name: string): FormGroup {
    //console.log('this.form?.get(name):', this.form?.get(name))
    return (this.form?.get(name) as FormGroup);
  }

  getFormGroupStringWithName(name: string): string {
    return (this.form?.get(name) as FormGroup).value;
  }

  getFormControlByName(name: string): FormControl {
    const control = this.form?.get(name);
    if (!control) {
      console.error(`Control with name '${name}' not found.`);
      return new FormControl(); // Return a dummy control to avoid runtime errors.
    }
    if (control instanceof FormControl) {
      return control;
    } else {
      console.error(`Control with name '${name}' is not a FormControl.`);
      return new FormControl(); // Return a dummy control to avoid runtime errors.
    }
  }

  getYesNoNaControl(groupName: string, fieldName: string): FormControl {
    const group = this.getFormGroupWithName(groupName);
    if (!group) {
      console.error(`Group with name '${groupName}' not found.`);
      return new FormControl(); // Fallback control
    }
    const control = group.get(fieldName) as FormControl;
    if (!control) {
      console.error(`Control with name '${fieldName}' in group '${groupName}' not found.`);
      return new FormControl(); // Fallback control
    }
    return control;
  }
  

  getFieldName(fieldName: string): string {
    return this.formFieldNamesMapping[fieldName] || fieldName;
  }

  getFormTitle(formType: string): string {
    return this.formTitleNamesMapping[formType] || formType;
  }

  getRadioOptions(fieldName: string): string[] {
    return this.radioOptions;
  }

  onSubmit() {
    console.log('Form submitted:', this.form?.value);
  }

  onReset() {
    this.form?.reset();
  }
}