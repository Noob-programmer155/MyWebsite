import { Document, Font, Image, Link, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import date  from './utils/date.json';
import { useParams } from "react-router";

export default function ApplicationLetter() {
    const {data} = useParams()
    const {language, subjectName, subjectPosition, subjectGender, companyName, companyAddress, companyCitystatezipcode, jobTarget, jobSource} = JSON.parse(new TextDecoder().decode(Uint8Array.from(window.atob(data),i => i.codePointAt(0))));
    document.title = language === "Indonesian"? "Surat Lamaran":"Application Letter"
    Font.registerHyphenationCallback(word => [word])
    return(
        <PDFViewer width='100%' height={`${window.innerHeight}px`}>
            <Document 
                title={language === "Indonesian"? "Surat Lamaran":"Application Letter"}
                author="Arrijal Amar Ma`ruf"
                keywords="Application Letter"
            >
                {(language === "Indonesian")?
                    <GeneralLetterIndonesia 
                        subject={subjectName}
                        position={subjectPosition}
                        address={companyAddress} 
                        citystatezipcode={companyCitystatezipcode} 
                        company={companyName} 
                        job={jobTarget} 
                        jobSource={jobSource}/>:
                    <GeneralLetterEnglish 
                        subject={subjectName}
                        position={subjectPosition}
                        gender={subjectGender} 
                        address={companyAddress}
                        citystatezipcode={companyCitystatezipcode} 
                        company={companyName} 
                        job={jobTarget} 
                        jobSource={jobSource}/>
                }
            </Document>
        </PDFViewer>
    )
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
    },
    general: {
        fontFamily: 'Times-Roman',
        fontSize: '11pt',
        lineHeight: '1.5pt'
    },
    section1: {
        margin: '40pt 40pt 0 40pt',
    },
    section2: {
        margin: '15pt 40pt 0 40pt'
    },
    desc: {
        fontFamily: 'Times-Roman',
        fontSize: '11pt',
        lineHeight: '1.5pt',
        textIndent: '30px',
        textAlign:'justify'
    }
});

const GenerateDate = (id) => {
    const dt = new Date().toLocaleDateString().split('/')
    return `${dt[1]} ${date.date.filter(it => it.id === id)[0].value[Number(dt[0])]} ${dt[2]}`
}

const GeneralLetterIndonesia = (props) => {
    const {subject,position,address,citystatezipcode,company,job,jobSource} = props
    return(
        <Page size='A4' style={styles.page}>
            <View style={styles.section1} wrap={false}>
                <Text style={styles.general}>Arrijal Amar Ma`ruf</Text>
                <Text style={styles.general}>Colomadu, Karanganyar</Text>
                <Text style={styles.general}>(+62) 089-8868-4379</Text>
                <Link style={styles.general} src="mailto:amrrrr572@gmail.com">amrrrr572@gmail.com</Link>
                <Text style={styles.general}>{GenerateDate('ID')}</Text>
            </View>
            <View style={styles.section2} wrap={false}>
                <Text style={styles.general}>Kepada Yth.</Text>
                <Text style={styles.general}>{subject}, {position}</Text>
                <Text style={styles.general}>{company}</Text>
                <Text style={styles.general}>{address}</Text>
                <Text style={styles.general}>{citystatezipcode}</Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.desc}>
                    {`Saya menulis surat ini bermaksud untuk menyatakan minat saya yang kuat terhadap posisi ${job} di ${company}, sebagaimana yang ditunjukkan di ${jobSource}. Meskipun saya belum memiliki pengalaman profesional sebelumnya, saya yakin bahwa minat dan hobi saya dalam pemrograman, komitmen saya untuk terus belajar, serta keterampilan yang saya peroleh baik dari training bootcamp maupun dari proses pembelajaran yang membuat saya menjadi kandidat kuat untuk peran ini.`}
                </Text>
                <Text style={styles.desc}>
                    Selama saya berada di Bangkit Academy, saya memperoleh kemampuan dalam berbagai teknologi pemrograman seperti Javascript, HTML/CSS, MySQL, NodeJS serta kemampuan khusus di bidang Cloud Engineer di Google Cloud seperti Iaas (Compute Engine), Paas (App Engine, Cloud Run), and Saas (Google Translate API, Google Vision API), Containerized Machine (Docker,Kubernetes), CI/CD menggunakan Jenkins dan Spinnaker. Saya juga memperkuat kemampuan Algoritma dan Struktur data serta kemampuan komunikasi saya, baik itu di Bangkit maupun melalui pembelajaran mandiri. Pengalaman saya di Bangkit ditambah dengan pembelajaran mandiri telah membekali saya untuk dapat merancang, mengembangkan, serta mengatasi masalah pada perangkat lunak.
                </Text>
                <Text style={styles.desc}>
                    Saya memiliki keunggulan pada tekad yang tak kenal lelah untuk terus meningkatkan keterampilan saya dan semangat saya untuk menyelesaikan masalah-masalah yang menantang dengan kreativitas dan inovasi. Saya memiliki rekam jejak yang terbukti dengan cepat memahami konsep-konsep baru dan beradaptasi dengan teknologi yang terus berkembang. Selain itu, saya berkembang dengan baik di lingkungan kolaboratif dan sangat ingin berkontribusi untuk tim Software Engineer secara dinamis. Oleh karena hal itu, membuat saya sangat antusias dengan peluang untuk mengaplikasikan pengetahuan saya dan berkontribusi pada pengembangan solusi perangkat lunak canggih di perusahaan ini.
                </Text>
                <Text style={styles.desc}>
                    {`Pada lampiran surat ini terdapat resume saya yang memberikan rincian lebih lanjut mengenai pendidikan, proyek-proyek, dan keterampilan teknis serta portofolio mengenai proyek dan sertifikat keahlian saya. Saya akan sangat senang jika diberikan kesempatan untuk membahas bagaimana latar belakang saya sesuai dengan tujuan ${company} dan bagaimana saya dapat berkontribusi pada kesuksesan tim Anda. Silakan hubungi saya di (+62) 089-8868-4379 atau melalui email di `}<Link style={styles.general} src="mailto:amrrrr572@gmail.com">amrrrr572@gmail.com</Link> untuk kelanjutan wawancara.
                </Text>
                <Text style={styles.desc}>
                    {`Terima kasih atas pertimbangan lamaran saya. Saya menantikan kemungkinan untuk bekerja dengan tim yang berbakat di ${company} dan berkontribusi pada kesuksesan perusahaan.`}
                </Text>
            </View>
            <View style={{alignItems:'flex-end',...styles.section2,marginTop:'30pt'}}>
                <Text style={{margin:'20pt 15pt 20pt 0',...styles.general}}>
                    Hormat Saya,
                </Text>
                <Text style={styles.general}>
                    Arrijal Amar Ma`ruf
                </Text>
            </View>
        </Page>
    )
}

const GeneralLetterEnglish = (props) => {
    const {subject,position,gender,address,citystatezipcode,company,job,jobSource} = props
    return(
        <Page size='A4' style={styles.page}>
            <View style={styles.section1} wrap={false}>
                <Text style={styles.general}>Arrijal Amar Ma`ruf</Text>
                <Text style={styles.general}>Colomadu, Karanganyar</Text>
                <Text style={styles.general}>(+62) 089-8868-4379</Text>
                <Link style={styles.general} src="mailto:amrrrr572@gmail.com">amrrrr572@gmail.com</Link>
                <Text style={styles.general}>{GenerateDate('ID')}</Text>
            </View>
            <View style={styles.section2} wrap={false}>
                <Text style={styles.general}>{subject}, {position}</Text>
                <Text style={styles.general}>{company}</Text>
                <Text style={styles.general}>{address}</Text>
                <Text style={styles.general}>{citystatezipcode}</Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.general}>Dear {gender} {subject}</Text>
                <Text style={{marginTop:'15pt',...styles.desc}}>
                    {`I am excited to express my strong interest in the ${job} position at ${company}, which I discovered through ${jobSource}. While I may not have professional experience, my passion for programming and commitment to ongoing education make me a highly qualified candidate for this role. I have acquired valuable skills through a combination of boot camp training and self-guided learning, which I am confident will enable me to excel in this position.`}
                </Text>
                <Text style={styles.desc}>
                    During my time at the Bangkit Academy boot camp, I acquired a diverse set of programming skills including Javascript, HTML/CSS, MySQL, and NodeJS. Additionally, I received specialized training in Cloud Engineering with Google Cloud, specifically in Iaas (Compute Engine), Paas (App Engine, Cloud Run), and Saas (Google Translate API, Google Vision API), as well as Containerized Machine (Docker, Kubernetes), and CI/CD using Jenkins and Spinnaker. Through Bangkit programs and self-learning, I also improved my communication skills and strengthened my abilities in Algorithm and Data structure. As a result, I am now fully equipped to design, develop, and troubleshoot software.
                </Text>
                <Text style={styles.desc}>
                    I am confident in my ability to constantly enhance my skills and apply my creativity and innovation to solve even the most complex problems. With my quick learning abilities and adaptability to changing technologies, I am always ready to take on new challenges. Furthermore, I am a team player and thrive in collaborative environments, where I can contribute my expertise as a Software Engineer. Thus, I eagerly look forward to applying my knowledge and skills to help develop cutting-edge software solutions within this esteemed organization.
                </Text>
                <Text style={styles.desc}>
                    {`I have attached my resume to this email, which includes information on my education, technical skills, and project experience. Additionally, I have included a portfolio of my work and certificates of expertise. I am very interested in the opportunity to discuss how my background aligns with ${company}'s goals and how I can contribute to the success of your team. Please feel free to contact me at (+62) 089-8868-4379 or `}<Link style={styles.general} src="mailto:amrrrr572@gmail.com">amrrrr572@gmail.com</Link> to schedule an interview. Thank you for considering my application.
                </Text>
                <Text style={styles.desc}>
                    {`Thank you for taking the time to review my application. I am excited about the opportunity to work with the skilled team at ${company} and make a valuable contribution to the company's achievements.`}
                </Text>
            </View>
            <View style={{alignItems:'flex-end',...styles.section2,marginTop:'30pt'}}>
                <Text style={{margin:'20pt 25pt 20pt 0',...styles.general}}>
                    Sincerely,
                </Text>
                <Text style={styles.general}>
                    Arrijal Amar Ma`ruf
                </Text>
            </View>
        </Page>
    )
}