import React from 'react'
import { BaseModal } from './BaseModal'

const InfoModal = ({ isOpen, handleClose }) => {
    return (
        <BaseModal title={"لئیب ءِ راہبند"} isOpen={isOpen} handleClose={handleClose} >
            <div className="text-lg text-gray-900 dark:text-gray-300 text-start mt-5">
                <span>
                    داتگیں آب ءَ  گوں لبز جوڑ بہ کن اِت
                </span>
            </div>
            <div className="text-lg text-gray-900 dark:text-gray-300 text-start mt-5">
                <span>
                    ہمک لبز دو یا دو ءَ چہ گیش آب ءِ بہ بیت
                </span>
            </div>
            <div className="text-lg text-gray-900 dark:text-gray-300 text-start mt-5">
                <span>
                    داتگیں آباں چہ یک آبے باز بر ءَ کارمرز بیت کنت، چُشکہ واوا
                </span>

            </div>

            <div className='mt-4 flex items-center w-full justify-center'>
                <span>
                    ہمک روچ نوکیں لیبے کَیت
                </span>

            </div>

        </BaseModal>
    )
}

export default InfoModal