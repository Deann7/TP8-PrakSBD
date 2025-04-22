import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NetlabLogo from '/Logo.svg'

export default function Navbar({ scrollTo }) {
  const navigation = [
    { name: 'Home', href: '', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'SBD', href: '/Sbd', action: () => scrollTo.sbd() },
    { name: 'DMJ', href: '/Dmj', action: () => scrollTo.dmj() },
    { name: 'OS', href: '/OS', action: () => scrollTo.os() },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo di sebelah kanan */}
            <div className="flex items-center justify-start absolute right-6 flex-1">
              <img
                alt="Netlab Logo"
                src={NetlabLogo}
                className="h-12 w-auto"
              />
            </div>

            {/* Menu navigasi di sebelah kiri */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={item.action}
                className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium w-full text-left'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}