document.addEventListener("DOMContentLoaded", function () {
            fetch('https://raw.githubusercontent.com/bazaarteech/faq/refs/heads/main/faq.json')
                .then(response => response.json())
                .then(data => {
                    fetch('https://ipinfo.io/json?token=7026faa1150bfd')
                        .then(response => response.json())
                        .then(ipData => {
                            var userCountry = ipData.country;
                          var userLang;
                            
                        if (['MA', 'SA', 'AE', 'DZ', 'TN', 'KW', 'QA', 'OM', 'BH', 'EG', 'IQ', 'SY', 'JO', 'LB', 'PS', 'LY', 'SD', 'DJ', 'SO',  'SS'].includes(userCountry)) {
                            userLang = 'ar'; 
                        } else if (['CR', 'MX', 'AR', 'CL', 'CO', 'PE', 'VE', 'GT', 'EC', 'BO', 'PY', 'UY', 'CU', 'DO', 'SV', 'NI', 'HN', 'PR', 'GQ', 'PA', 'ES'].includes(userCountry)) {
                            userLang = 'es'; 
                        } else if (['US', 'GB', 'CA', 'AU', 'IE', 'NZ', 'ZA', 'IN', 'NG', 'PK', 'PH', 'SG', 'JM', 'MT', 'BB', 'TT', 'GH', 'ZM', 'BS', 'BZ', 'GD', 'HN', 'KN', 'LC', 'VC', 'SL', 'MW', 'ZW', 'KE', 'UG', 'SS', 'MU', 'MV', 'FJ', 'MM', 'NP', 'KR', 'JP', 'IL', 'HK', 'ET', 'ER', 'CY', 'BN', 'AO', 'BD', 'VU', 'TZ', 'LK', 'SC', 'WS', 'LC', 'KN', 'RW', 'DK', 'NO', 'RU', 'TR', 'IT', 'DE', 'NL', 'TH', 'BY', 'HR', 'AT', 'BG', 'RO', 'FI', 'IS', 'KZ', 'DM', 'GY', 'VG', 'TV'].includes(userCountry)) {
                            userLang = 'en'; 
                        } else if (['FR', 'CD', 'BE', 'CH', 'LU', 'CI', 'SN', 'CM', 'GN', 'BF', 'NE', 'TD', 'CF', 'RW', 'NC', 'CK', 'BJ', 'BI', 'KM', 'CG', 'ML', 'SC'].includes(userCountry)) {
                            userLang = 'fr'; 
                        } else {
                            userLang = 'ar'; 
                        }

                            // تحديث النصوص بناءً على اللغة
                            if (data[userLang]) {
                                document.getElementById('faq1Question').textContent = data[userLang].faq1.question;
                                document.getElementById('faq1Answer').innerHTML = data[userLang].faq1.answer;
                                document.getElementById('faq2Question').textContent = data[userLang].faq2.question;
                                document.getElementById('faq2Answer').innerHTML = data[userLang].faq2.answer;
                            } else {
                                console.error('Translation data for the selected language is not available.');
                            }
                        })
                        .catch(error => console.error('Error fetching IP data:', error));
                })
                .catch(error => console.error('Error fetching translation data:', error));

            // تفعيل الفتح والإغلاق للأسئلة
            document.querySelectorAll('.faq-header').forEach(header => {
                header.addEventListener('click', function () {
                    const faqBody = this.nextElementSibling;
                    const isActive = this.classList.contains('active');
                    document.querySelectorAll('.faq-header').forEach(item => {
                        item.classList.remove('active');
                        item.nextElementSibling.style.display = 'none';
                    });

                    if (!isActive) {
                        this.classList.add('active');
                        faqBody.style.display = 'block';
                    }
                });
            });
        });
