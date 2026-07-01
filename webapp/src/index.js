import manifest from '../../plugin.json';

class Plugin {
    initialize(registry) {
        this.enableRTL();
    }

    enableRTL() {
        const lang = navigator.language || '';

        if (lang.startsWith('fa') || lang.startsWith('ar')) {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.style.direction = 'rtl';
            document.body.style.textAlign = 'right';
        }
    }
}

window.registerPlugin(manifest.id, new Plugin());