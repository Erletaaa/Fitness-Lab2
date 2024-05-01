import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import Foto1 from '../assets/image2.png'
import CEO from '../assets/geta.png'
import Foto2 from '../assets/image3.png'

const navigation = [
  { name: 'Categories', href: '/categories' },
  { name: 'Trainers', href: '#' },
  { name: 'Packages', href: '#' },
  { name: 'About Us', href: '#' },
]
const features = [
  {
    name: 'Personalized Workouts',
    description:
      'Tailored exercise plans designed to match your fitness level, goals, and preferences.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Expert Guidance',
    description:
      'Access to certified trainers who provide personalized advice, feedback, and support throughout your fitness journey.',
    icon: LockClosedIcon,
  },
  {
    name: 'Progress Tracking',
    description:
      'Track your fitness progress, set goals, and monitor your achievements over time to stay accountable and motivated.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Convenient Access',
    description:
      'Access your workouts and track your progress anytime, anywhere, with seamless integration across multiple devices.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Equipment Variety',
    description:
      'Utilize a wide selection of high-quality fitness equipment, including cardio machines, free weights, resistance bands, stability balls, and more, to enhance your workouts and target specific muscle groups.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Nutritional Guidance',
    description:
      'Customized meal plans and nutrition advice from experienced dietitians to help you fuel your body for optimal performance and results.',
    icon: FingerPrintIcon,
  },
]
const tiers = [
  {
    name: 'UniClub',
    id: 'tier-UniClub',
    href: '#',
    priceMonthly: 'Є24.99',
    description: 'Unlock the full potential of your fitness journey with our exclusive monthly membership',
    features: ['Favorite location', 'From 10:00-16:00', 'No personal trainer', 'All equipment available'],
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'tier-Premium',
    href: '#',
    priceMonthly: 'Є49.99',
    description: 'Unlock the body you desire with our exclusive premium packet',
    features: [
      'All locations',
      '24/7 available',
      'Personal Trainer',
      'All equipment available',
      'Food plan from our nutritionists',
    ],
    mostPopular: true,
  },
  {
    name: 'MultiClub',
    id: 'tier-MultiClub',
    href: '#',
    priceMonthly: 'Є34.99',
    description: 'Dedicated to our loyal fitness budies',
    features: [
      'All locations',
      '24/7 available',
      'No personal trainer',
      'All equipment available',
    ],
    mostPopular: false,
  },
]
const faqs = [
  {
    id: 1,
    question: "What types of workouts are available in the app?",
    answer:
      "Our app offers a wide variety of workouts, including strength training, cardio, yoga, HIIT, Pilates, and more. You can choose from pre-made workout plans or create your own custom workouts.",
  },
  {
    id: 2,
    question: "Can I customize my workout plan based on my fitness goals?",
    answer:
      "Yes, absolutely! Our app allows you to personalize your workout plan based on your specific fitness goals, whether it's weight loss, muscle gain, improved flexibility, or overall health and wellness.",
  },
  {
    id: 3,
    question: "Is there a free trial period before committing to a subscription?",
    answer:
      "Yes, we offer a free trial period for new users to explore the app and experience all its features before committing to a subscription. Simply sign up for a trial to get started.",
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Trainers', href: '#' },
    { name: 'Workouts', href: '#' },
    { name: 'Diet Plan', href: '#' },
  ],
  support: [
    { name: 'Pristina', href: '#' },
    { name: 'Prizren', href: '#' },
    { name: 'Peja', href: '#' },
    { name: 'Gjilan', href: '#' },
  ],
  company: [
    { name: 'Phone Number +38345898988', href: '#' },
    { name: 'Email   starfit@gmail.com', href: '#' },
  ],
  legal: [
    { name: 'Instagram', href: 'https://www.instagram.com/fivestarfit/' },
    { name: 'Facebook', href: 'https://www.facebook.com/fivestarprishtina/photos' },
    { name: 'Twitter', href: 'https://twitter.com/i/flow/login?redirect_after_login=%2F5starprishtina' },
    { name: 'Tiktok', href: 'https://www.tiktok.com/discover/Five-Star?lang=en' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div class="flex items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt=""></img>
              <h2 class="text-red-600 font-bold">STARFIT</h2>
            </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D0312D] to-[#990F02] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Unlock your potential Embrace your power
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Our app is your ultimate companion on your journey to a stronger, healthier you. Whether you're a seasoned athlete or just starting out, our expertly crafted workouts and personalized training plans cater to all fitness levels and goals. 
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="flex m-2 bg-red-900/5 p-1 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:center lg:p-4">
                  <img
                    src={Foto1}
                    alt="Foto1"
                    width={600}
                    height={30}
                    className="mr-8 shadow-2xl ring-1 ring-gray-900/10"
                  />
                  <img
                    src={Foto2}
                    alt="Foto2"
                    width={600}
                    height={30}
                    className="shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D0312D] to-[#990F02] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Logo cloud */}
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-5xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What do we offer
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Overview of the offerings available within our Starfit app, including both personalized workout plans and access to a variety of equipment to support their fitness goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src={CEO}
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#D0312D] to-[#990F02] opacity-[0.45]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#D0312D] to-[#990F02] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
            <div class="flex items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt=""></img>
              <h2 class="text-red-600 font-bold">STARFIT</h2>
            </div>
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    “I am personally invested in your growth and well-being. 
                    Together, let's push boundaries, break barriers, and redefine what's possible. Together, let's make every workout count.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Getta Beqa</div>
                  <div className="mt-1">CEO of STARFIT</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-red-600">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Pricing of our packages of&nbsp;all&nbsp;sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose from our Premium, UniClub, and MultiClub options to access exclusive benefits and facilities tailored to your needs.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                    tierIdx === 0 ? 'lg:rounded-r-none' : '',
                    tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                    'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular ? 'text-red-600' : 'text-gray-900',
                          'text-lg font-semibold leading-8'
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                          Most popular
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-red-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-red-600 text-white shadow-sm hover:bg-red-500'
                        : 'text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300',
                      'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                    )}
                  >
                    Subscribe
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#D0312D] to-[#990F02] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
              }}
            />
          </div>
          <div className="ml-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            "You don't have to be great to start, but you have to start to be great"
            </h2>
            
            <p className="text-3x1 tracking-tight text-gray-900 sm:text-4xl">
            Start using our app today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#D0312D] to-[#990F02] opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-35 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="flex items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt=""></img>
              <h2 class="text-red-600 font-bold">STARFIT</h2>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">App</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Locations</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact information</h3>
                  <ul role="list" className="mt-6 space-y-4 hover:text-red">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Social Media</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home;
