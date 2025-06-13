import { Metadata } from "next"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Research | Parag's Portfolio",
  description: "Explore my research interests, publications, and academic contributions in AI, ML, and Computer Vision.",
}

export default function ResearchPage() {
  const journalArticles = [
    {
      title: "Recent Advances in the Applications of Green Synthesized Nanoparticle Based Nanofluids for the Environmental Remediation",
      authors: "Shriram S. Sonawane, Parag P. Thakur, Manjakuppam Malika, Hafiz Muhammad Ali",
      journal: "Current Pharmaceutical Biotechnology",
      year: "2023",
      volume: "24(1)",
      pages: "188-198",
      impactFactor: "2.83",
      doi: "10.2174/1389201023666220411114620",
      link: "https://doi.org/10.2174/1389201023666220411114620",
    },
    {
      title: "Recent Trends in Applications of Nanofluids for Effective Utilization of Solar Energy",
      authors: "Parag P. Thakur, Shriram S. Sonawane, Hussein A Mohammed",
      journal: "Current Nano-Science",
      year: "2023",
      volume: "19(2)",
      pages: "170-185",
      impactFactor: "1.51",
      doi: "10.2174/1573413718666220119104138",
      link: "https://doi.org/10.2174/1573413718666220119104138",
    },
    {
      title: "Enhancement of pool boiling performance using MWCNT based nanofluids: A sustainable alternative for the heat recovery of wastewater and incinerator",
      authors: "Parag Thakur, Nishant Kumar, Shriram Sonawane",
      journal: "Sustainable Energy Technologies and Assessments",
      year: "2021",
      volume: "45",
      pages: "101-115",
      impactFactor: "7.63",
      doi: "10.1016/j.seta.2021.101115",
      link: "https://doi.org/10.1016/j.seta.2021.101115",
    },
    {
      title: "Recent Advances in Ultrasound-assisted Synthesis of Nano-emulsions and their Industrial Applications",
      authors: "Parag Thakur, Shriram Sonawane, Irina Potoroko, Shirish H Sonawane",
      journal: "Current Pharmaceutical Biotechnology",
      year: "2021",
      volume: "22(13)",
      pages: "1748-1758",
      impactFactor: "2.83",
      doi: "10.2174/1389201021666201104150102",
      link: "https://doi.org/10.2174/1389201021666201104150102",
    },
    {
      title: "Comparative performance evaluation of flyash based hybrid nanofluids in micro-channel based direct absorption solar collector",
      authors: "Thakur, P. P., Khapane, T. S., & Sonawane, S. S.",
      journal: "Journal of Thermal Analysis and Calorimetry",
      year: "2021",
      volume: "143",
      pages: "1713-1726",
      impactFactor: "4.75",
      doi: "10.1007/s10973-020-09884-5",
      link: "https://doi.org/10.1007/s10973-020-09884-5",
    },
    {
      title: "Reactive stripping and precipitation of Uranium in Micro-reactors",
      authors: "Nirvik Sen, Parag Thakur, Sameer Ekhande, R. Sirsam, K.K. Singh, S. Mukhopadhyaya, K.T.Shenoy",
      journal: "Separation Science and Technology",
      year: "2019",
      volume: "54(9)",
      pages: "1430-1442",
      impactFactor: "2.80",
      doi: "10.1080/01496395.2018.1563158",
      link: "https://doi.org/10.1080/01496395.2018.1563158",
    },
    {
      title: "Study on visco-elastic properties enhancement of MWCNT based polypropylene nanocomposites",
      authors: "Sonawane, S. S., Thakur, P. P., & Paul, R.",
      journal: "Materials Today: Proceedings",
      year: "2020",
      volume: "29",
      pages: "929-933",
      doi: "10.1016/j.matpr.2020.05.417",
      link: "https://doi.org/10.1016/j.matpr.2020.05.417",
    },
    {
      title: "Study of thermal property enhancement of MWCNT based polypropylene (PP) nanocomposites",
      authors: "Sonawane, S. S, Thakur, P. P., Paul, R.",
      journal: "Materials Today Proceedings",
      year: "2020",
      volume: "27(P1)",
      pages: "550-555",
      doi: "10.1016/j.matpr.2019.12.018",
      link: "https://doi.org/10.1016/j.matpr.2019.12.018",
    },
    {
      title: "Numeric and experimental investigations of Fe2O3 based nanofluids in direct absorption solar collector",
      authors: "Parag Thakur, Shriram Sonawane",
      journal: "Journal of Indian Chemical Society",
      year: "2020",
      volume: "97(10a)",
      pages: "1636-1641",
      impactFactor: "0.24",
    },
    {
      title: "Artificial neural network model for prediction of viscoelastic behavior of polycarbonate composites",
      authors: "Sarita Charde, Malika Mudaliar, Parag Thakur, Shriram Sonawane",
      journal: "Journal of Applied Research Technology",
      year: "2022",
      volume: "20(2)",
      doi: "10.22201/icat.24486736e.2022.20.2.1101",
      link: "https://doi.org/10.22201/icat.24486736e.2022.20.2.1101",
    },
  ];

  const patents = [
    {
      title: "A hybrid nanofluids based drilling fluid and method of preparation thereof",
      applicationNumber: "202221050711",
      filingDate: "September 6, 2022",
      grantDate: "August 28, 2024",
      patentNumber: "548836",
    },
    {
      title: "Biological degradation of Sulphur waste from the mill rejects of thermal power plant",
      applicationNumber: "202221047477",
      filingDate: "August 20, 2022",
      publicationDate: "April 14, 2023",
    },
    {
      title: "Development of Novel Process for micro-reactor-based Extraction of Heavy Antimony using ionic liquid-based Hybrid Nanofluids",
      applicationNumber: "202321016794",
      filingDate: "March 13, 2023",
      publicationDate: "May 12, 2023",
    },
  ];

  const books = [
    {
      title: "Nanofluids: Fundamentals, Applications & Challenges",
      publisher: "CRC Press, Taylor and Francis publications",
      year: "2024",
      isbn: "9781032519876",
      series: "Emerging Materials and Technologies series",
    },
    {
      title: "Nanofluids for Efficient Energy Conservation and Process intensification",
      publisher: "CRC Press, Taylor and Francis publications",
      year: "2025",
    },
  ];

  const bookChapters = [
    {
      title: "BiOX-based 2D composites for solar energy harvesting",
      authors: "Parag P. Thakur, Shriram S. Sonawane",
      book: "BiOX-based Photocatalysts for Dual Applications",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443238611",
      chapter: "32",
    },
    {
      title: "Current overview of applications of the hybrid nanofluids",
      authors: "Parag P. Thakur, Malika Mudailar, Shriram S. Sonawane, Muthupandian Ashok Kumar",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "1",
      doi: "10.1016/B978-0-443-21451-6.00001-2",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00001-2",
    },
    {
      title: "Overview on Mass transfer enhancement mechanism using the nanofluids",
      authors: "Parag P. Thakur, Shriram S. Sonawane, Dr. Prakash Jadhav, Srinath Suranani",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "3",
      doi: "10.1016/B978-0-443-21451-6.00003-6",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00003-6",
    },
    {
      title: "Overview of the Heat transfer Enhancement mechanism using the nanofluids",
      authors: "Parag P. Thakur, Malika Mudailar, Shriram S. Sonawane, Srinath Suranani, Hussain Mohammad",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "4",
      doi: "10.1016/B978-0-443-21451-6.00004-8",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00004-8",
    },
    {
      title: "Numerical and experimental investigations of nanofluids application solar collectors for the energy optimization",
      authors: "Parag P. Thakur, Malika Mudaliar, Shriram Sonawane, Irina Potoroko, Ashok Kumar Muthupandian",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "5",
      doi: "10.1016/B978-0-443-21451-6.00005-X",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00005-X",
    },
    {
      title: "Applications of nanofluid in boiling operation for enhancement of the critical heat flux (CHF)",
      authors: "Aaditi Pargaonkar, Parag Thakur, Shriram Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "6",
      doi: "10.1016/B978-0-443-21451-6.00006-1",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00006-1",
    },
    {
      title: "Applications of the hybrid nanofluids in the CO2 absorption and desorption processes",
      authors: "Parag Thakur, Malika Mudaliar, Shriram Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "10",
      doi: "10.1016/B978-0-443-21451-6.00010-3",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00010-3",
    },
    {
      title: "Applications of hybrid nanofluids in the extraction processes",
      authors: "Vishal S. Chandane, Ajit P. Rathod, Parag Thakur, Shriram Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "11",
      doi: "10.1016/B978-0-443-21451-6.00011-5",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00011-5",
    },
    {
      title: "Applications of hybrid Nano fluids in the Proton Exchange Membrane Fuel Cells",
      authors: "Vishal S. Chandane, Pradeepkumar Ramteke, Ajit P. Rathod, Parag Thakur, Shriram Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "12",
      doi: "10.1016/B978-0-443-21451-6.00012-7",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00012-7",
    },
    {
      title: "Challenges of nanofluid applications in the chemical industry",
      authors: "Parag Thakur, Malika Mudailar, Shriram S. Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "13",
      doi: "10.1016/B978-0-443-21451-6.00013-9",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00013-9",
    },
    {
      title: "Applications of the nanofluids for the drilling fluid",
      authors: "Malika Mudailar, Parag Thakur, Shriram S. Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "15",
      doi: "10.1016/B978-0-443-21451-6.00015-2",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00015-2",
    },
    {
      title: "Application of the nanofluids for the oil mobility",
      authors: "Malika Mudailar, Parag Thakur, Shriram S. Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "16",
      doi: "10.1016/B978-0-443-21451-6.00016-4",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00016-4",
    },
    {
      title: "Nanofluids applications in chemical enhanced oil recovery: current opinion and recent advances",
      authors: "Uma Sankar Behera, Parag Thakur, Shriram Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "17",
      doi: "10.1016/B978-0-443-21451-6.00017-6",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00017-6",
    },
    {
      title: "Investigation of the effects of nanofluids on the hole cleaning efficiency of water based drilling mud",
      authors: "Malika Mudailar, Parag Thakur, Shriram S. Sonawane",
      book: "Applications of Hybrid Nanofluids in Chemical and Petroleum Industry",
      publisher: "ELSEVIER",
      year: "2025",
      isbn: "9780443214516",
      chapter: "18",
      doi: "10.1016/B978-0-443-21451-6.00018-8",
      link: "https://doi.org/10.1016/B978-0-443-21451-6.00018-8",
    },
    {
      title: "Introduction to nanofluids",
      authors: "Parag Thakur, Shriram Sonawane",
      book: "Nanofluid Applications for Advanced Thermal Solution",
      publisher: "ELSEVIER",
      year: "2023",
      isbn: "9780443152399",
      chapter: "1",
      doi: "10.1016/B978-0-443-15239-9.00001-1",
      link: "https://doi.org/10.1016/B978-0-443-15239-9.00001-1",
    },
    {
      title: "Synthesis and characterization of Nanofluids",
      authors: "Parag Thakur, Aaditi Pargaonkar, Clara Gongloves, Shriram Sonawane",
      book: "Nanofluid Applications for Advanced Thermal Solution",
      publisher: "ELSEVIER",
      year: "2023",
      isbn: "9780443152399",
      chapter: "2",
      doi: "10.1016/B978-0-443-15239-9.00002-3",
      link: "https://doi.org/10.1016/B978-0-443-15239-9.00002-3",
    },
    {
      title: "Stability of nanofluids",
      authors: "Parag Thakur, Irina Potoroko, Shriram Sonawane",
      book: "Nanofluid Applications for Advanced Thermal Solution",
      publisher: "ELSEVIER",
      year: "2023",
      isbn: "9780443152399",
      chapter: "3",
      doi: "10.1016/B978-0-443-15239-9.00003-5",
      link: "https://doi.org/10.1016/B978-0-443-15239-9.00003-5",
    },
    {
      title: "Promising nanoparticles for water reuse",
      authors: "Akash Kumar, Parag Thakur, Malika Manjakuppam, Shriram Sonawane",
      book: "Resource Recovery in Drinking Waters",
      publisher: "Elsevier Publications",
      year: "2023",
      isbn: "978-0-323-99344-9",
      chapter: "3",
      doi: "10.1016/B978-0-323-99344-9.00003-7",
      link: "https://doi.org/10.1016/B978-0-323-99344-9.00003-7",
    },
    {
      title: "Energy recovery from industrial waste waters",
      authors: "Parag Thakur, Manjakuppam Malika, Shriram Sonawane",
      book: "Resource Recovery in Industrial Waste waters",
      publisher: "Elsevier Publications",
      year: "2023",
      isbn: "978-0-323-95327-6",
      chapter: "9",
      doi: "10.1016/B978-0-323-95327-6.00009-9",
      link: "https://doi.org/10.1016/B978-0-323-95327-6.00009-9",
    },
    {
      title: "Sulfate/Sulfur recovery from municipal wastewater treatment plants",
      authors: "Manjakuppam Malika, Parag P Thakur, Shriram S Sonawane",
      book: "Resource Recovery in Municipal Waste waters",
      publisher: "Elsevier Publications",
      year: "2023",
      isbn: "978-0-323-95327-6",
      chapter: "3",
      doi: "10.1016/B978-0-323-99348-7.00003-5",
      link: "https://doi.org/10.1016/B978-0-323-99348-7.00003-5",
    },
    {
      title: "Current overview of nanofluid applications",
      authors: "Parag Thakur, Shriram Sonawane",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "1",
      doi: "10.1016/B978-0-323-90564-0.00004-0",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00004-0",
    },
    {
      title: "Thermo-physical and optical properties of the nanofluids",
      authors: "Parag Thakur, Shriram Sonawane, Ratiram Chaudhary",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "2",
      doi: "10.1016/B978-0-323-90564-0.00006-4",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00006-4",
    },
    {
      title: "Experimental investigations of direct absorption solar collectors",
      authors: "Dhananjay Singh, S K Patel, P Kumar, D Pal, Parag Thakur, Shriram Sonawane",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "5",
      doi: "10.1016/B978-0-323-90564-0.00011-8",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00011-8",
    },
    {
      title: "Numerical and experimental investigations of nanofluid application in car radiators",
      authors: "Parag Thakur, Irina Potoroko, Shriram Sonawane",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "6",
      doi: "10.1016/B978-0-323-90564-0.00008-8",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00008-8",
    },
    {
      title: "Mathematical, Numerical and experimental investigations of nanofluids applications in Pool Boiling process",
      authors: "Shriram Sonawane, Parag Thakur, Sparsh Bhaisare, Prakash Jadhav",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "7",
      doi: "10.1016/B978-0-323-90564-0.00003-9",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00003-9",
    },
    {
      title: "Mathematical, Numerical and experimental investigation of nanofluids application in Flow Boiling processes",
      authors: "Shriram Sonawane, Parag Thakur, Sparsh bhaisare, Prakash jadhav",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "8",
      doi: "10.1016/B978-0-323-90564-0.00002-7",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00002-7",
    },
    {
      title: "Mathematical and Numerical investigations of CO2 absorption and desorption process",
      authors: "Parag Thakur, Shriram Sonawane",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "9",
      doi: "10.1016/B978-0-323-90564-0.00007-6",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00007-6",
    },
    {
      title: "Experimental investigation of CO2 absorption process using nanofluids",
      authors: "Parag Thakur, Hasan Uslu, Shriram Sonawane",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "10",
      doi: "10.1016/B978-0-323-90564-0.00001-5",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00001-5",
    },
    {
      title: "Computational analysis of nanofluids based drug delivery system: preparation",
      authors: "ST Yerpude, AK Potbhare, PR Bhilkar, Parag Thakur, Pratiksha Khiratkar, Martin F Desimone, PR Dhongle, Shriram Sonawane, Clara Goncalves, RG Chaudhary",
      book: "Applications of Nanofluids in Chemical and Bio-medical Processing Industry",
      publisher: "Elsevier publication",
      year: "2022",
      isbn: "978-0-32-390564-0",
      chapter: "14",
      doi: "10.1016/B978-0-323-90564-0.00014-3",
      link: "https://doi.org/10.1016/B978-0-323-90564-0.00014-3",
    },
    {
      title: "Nano-biotechnology for bacterial modification for wastewater treatment and resource recovery",
      authors: "Shriram Sonawane, Abhijit Gadhe, Parag P Thakur, Shirish Hari Sonawane, Hussein A Mohammed",
      book: "Novel Approaches Towards Wastewater Treatment and Resource Recovery Technologies",
      publisher: "Elsevier Publications",
      year: "2022",
      isbn: "978-0-32-390627-2",
      chapter: "8",
      doi: "10.1016/B978-0-323-90627-2.00008-3",
      link: "https://doi.org/10.1016/B978-0-323-90627-2.00008-3",
    },
    {
      title: "Carbon Nano tubes (CNT) based hybrid Nano fluids for the waste water treatment plants in the industry",
      authors: "Shriram Sonawane, Malika Mudaliar, Parag Thakur, Shirish Sonawane",
      book: "Novel Approaches Towards Wastewater Treatment and Resource Recovery Technologies",
      publisher: "Elsevier Publications",
      year: "2022",
      isbn: "978-0-32-390627-2",
      chapter: "21",
      doi: "10.1016/B978-0-323-90627-2.00021-6",
      link: "https://doi.org/10.1016/B978-0-323-90627-2.00021-6",
    },
    {
      title: "Nano-particle-enhanced ionic liquids (NEIL) for the waste water treatment",
      authors: "Parag Thakur, SS Sonawane, SH Sonawane",
      book: "Novel Approaches Towards Wastewater Treatment and Resource Recovery Technologies",
      publisher: "Elsevier Publications",
      year: "2022",
      isbn: "978-0-32-390627-2",
      chapter: "20",
      doi: "10.1016/B978-0-323-90627-2.00020-4",
      link: "https://doi.org/10.1016/B978-0-323-90627-2.00020-4",
    },
    {
      title: "Nanomaterials for membrane synthesis: Introduction, mechanism and Challenges for wastewater treatment",
      authors: "Parag Thakur, Shriram Sonawane",
      book: "Handbook of Nanomaterials for Wastewater Treatment: Fundamentals, Current status and Scale-up Challenges",
      publisher: "Elsevier Publication",
      year: "2021",
      isbn: "978-0-12-821496-1",
      chapter: "9",
      doi: "10.1016/B978-0-12-821496-1.00009-X",
      link: "https://doi.org/10.1016/B978-0-12-821496-1.00009-X",
    },
    {
      title: "Nanofluids-based delivery system, encapsulation of nanoparticles for stability to make stable nanofluids",
      authors: "Parag Thakur, Sonawane, S. S., Sonawane, S. H., & Bhanvase, B. A.",
      book: "Encapsulation of Active Molecules and Their Delivery System",
      publisher: "Elsevier Publication",
      year: "2020",
      isbn: "978-0-12-819363-1",
      doi: "10.1016/C2018-0-05369-4",
      link: "https://doi.org/10.1016/C2018-0-05369-4",
    },
    {
      title: "Reactive Stripping & Precipitation of Uranium in microreactors",
      authors: "Parag Thakur, Nirvik Sen, Sameer Ekhande, R. Sirsam, K.K. Singh, S. Mukhopadhyaya, K.T. Shenoy",
      book: "International Nuclear Information System (INIS)",
      year: "2018",
      volume: "49",
      issue: "37",
      reference: "RN:49072564",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        </div>

        {/* Journal Articles */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Journal Articles</h2>
          <div className="grid gap-6">
            {journalArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">
                      {article.link ? (
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary"
                        >
                          {article.title}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        article.title
                      )}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{article.authors}</p>
                      <p className="text-base">
                        <span className="font-medium">{article.journal}</span>
                        {article.volume && `, ${article.volume}`}
                        {article.pages && `, ${article.pages}`}
                        {article.year && ` (${article.year})`}
                      </p>
                      {article.impactFactor && (
                        <p className="text-sm text-muted-foreground">
                          Impact Factor: {article.impactFactor}
                        </p>
                      )}
                      {article.doi && (
                        <p className="text-sm text-muted-foreground">
                          DOI: {article.doi}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Patents */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Patents</h2>
          <div className="grid gap-6">
            {patents.map((patent, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{patent.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">
                        Application Number: {patent.applicationNumber}
                      </p>
                      <p className="text-base text-muted-foreground">
                        Filing Date: {patent.filingDate}
                      </p>
                      {patent.grantDate && (
                        <p className="text-base text-muted-foreground">
                          Grant Date: {patent.grantDate}
                          {patent.patentNumber && ` (Patent No. ${patent.patentNumber})`}
                        </p>
                      )}
                      {patent.publicationDate && (
                        <p className="text-base text-muted-foreground">
                          Publication Date: {patent.publicationDate}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Books */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Books</h2>
          <div className="grid gap-6">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">{book.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{book.publisher}</p>
                      {book.year && (
                        <p className="text-base text-muted-foreground">Year: {book.year}</p>
                      )}
                      {book.isbn && (
                        <p className="text-base text-muted-foreground">ISBN: {book.isbn}</p>
                      )}
                      {book.series && (
                        <p className="text-base text-muted-foreground">Series: {book.series}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Book Chapters */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Book Chapters</h2>
          <div className="grid gap-6">
            {bookChapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl">
                      {chapter.link ? (
                        <a
                          href={chapter.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary"
                        >
                          Chapter {chapter.chapter}: {chapter.title}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        `Chapter ${chapter.chapter}: ${chapter.title}`
                      )}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">{chapter.authors}</p>
                      <p className="text-base">
                        <span className="font-medium">{chapter.book}</span>
                        {chapter.publisher && `, ${chapter.publisher}`}
                        {chapter.year && ` (${chapter.year})`}
                      </p>
                      {chapter.isbn && (
                        <p className="text-base text-muted-foreground">ISBN: {chapter.isbn}</p>
                      )}
                      {chapter.doi && (
                        <p className="text-base text-muted-foreground">DOI: {chapter.doi}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 