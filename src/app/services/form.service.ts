import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  getFinancialAidStudentForm(): FormGroup {
    return new FormGroup({
      admissions: new FormGroup({
        enrollmentApplication: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        driverSocial: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        citizenDocs: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        hsDiploma: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        homeschoolCertificate: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        })
      }),
      orientationForms: new FormGroup({
        docusignForms: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        enrollmentAgreement: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        contractAddendum: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        kitList: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        })
      }),
      financialAidForms: new FormGroup({
        understandingAidDisbursement: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        receiptOfDisclosures: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        masterSheet: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        ledgerCards: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        verificationForm: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        cFiles: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        professionalJudgement: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        ISIR: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        ISIRCorrections: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        creditBalanceForm: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        awardLetter: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        entranceLoanCounseling: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        masterPromNote: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        NSLDSPrintout: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        })
      }),
      miscellaniousForms: new FormGroup({
        SAPForms: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        LOAandContractAddendum: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        })
      }),
      exitInterviewDocumentationForms: new FormGroup({
        exitLoanCounseling: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        finalMasterSheet: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        refundNotice: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        refundCheck: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        refundNoticeToStudent: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        tuitionAccount: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        proofOfTrainingAndCompletionForms: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        finalClockHourRGMPrintout: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        transcript: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        }),
        graduateSurvey: new FormGroup({
          yesNoNa: new FormControl('', Validators.required)
        })
      })
    });
  }
  

  private createSectionFormArray(items: string[]): FormArray {
    const formGroups = items.map(item => this.createItemFormGroup(item));
    return new FormArray(formGroups);
  }

  private createItemFormGroup(item: string): FormGroup {
    return new FormGroup({
      [item]: new FormGroup({
        yesNoNa: new FormControl('', Validators.required)
      })
    });
  }

  getCashStudentForm(): FormGroup {
    return this.fb.group({
      name: this.fb.group({
        value: ['', Validators.required],
        yesNoNa: ['no', Validators.required],
      }),
      paymentMethod: this.fb.group({
        value: ['', Validators.required],
        yesNoNa: ['no', Validators.required],
      }),
      // Add other fields specific to the Cash Student form
    });
  }

  getVaStudentForm(): FormGroup {
    return this.fb.group({
      name: this.fb.group({
        value: ['', Validators.required],
        yesNoNa: ['no', Validators.required],
      }),
      vaId: this.fb.group({
        value: ['', Validators.required],
        yesNoNa: ['no', Validators.required],
      }),
      // Add other fields specific to the VA Student form
    });
  }
}
