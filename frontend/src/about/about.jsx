import React, { Suspense } from 'react'
import PageHeader from '../template/page-header'

const Field = React.lazy(() => import('../template/field'));

export default (props)=>(
    <div>
        <PageHeader name="About" small="xxx"/>

        <Suspense fallback={<div>loading</div>}>
            <Field />
        </Suspense>
    </div>
)