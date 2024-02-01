import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { MainLayout } from '~/components/MainLayout';
import { HowItWorks } from '~/components/pages/HowItWorks';

export default component$(() => {
    return <>
        <MainLayout>
            <HowItWorks />
        </MainLayout>
    </>
});

export const head: DocumentHead = {
    title: "How it works? | U-Wifi",
    meta: [
        {
            name: "description",
            content: "U-Wifi"
        }
    ]
}