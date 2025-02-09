import type { PropsWithChildren } from 'react';
import '@rijkshuisstijl-community/design-tokens/dist/index.css'
import '../css/rhc-overrides.css'

// Default implementation, that you can customize
function Root({ children }: PropsWithChildren<object>) {
    return (
<div className="rhc-theme">
    <header className='ro-header'>
        <h1 className='ro-header__site-name'><img src='/img/logo.svg' className='ro-header__site-logo' alt='Logo Developer Overheid' />Developer Overheid</h1>
        <div className='ro-header__ro-logo'><img src='/img/logo-rijksoverheid.svg' alt='Logo Rijksoverheid' /></div>
    </header>
    {children}
</div>
    );
}

export default Root;
