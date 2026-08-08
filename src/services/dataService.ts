import { AdvocateModel, PracticeAreaModel, NavItemModel, StatModel, AwardModel } from "@/models/domain";

export class LandingPageDataService {
  public static getNavigationItems(): NavItemModel[] {
    return [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Practice Areas", href: "/practice-areas" },
      { label: "Advocates", href: "/advocates" },
      { label: "Sectors", href: "/sectors" },
      { label: "Contact", href: "/contact" },
    ];
  }
  public static getAwards(): AwardModel[] {
    return [
      { id: "award-1", stars: 3, title: "Best Law Firm", year: "2022" },
      { id: "award-2", stars: 3, title: "Client Choice", year: "Award" },
    ];
  }

  public static getStatistics(): StatModel[] {
    return [
      { id: "stat-1", value: "30+", label: "Years Combined Expertise" },
      { id: "stat-2", value: "12K+", label: "Matters Represented" },
      { id: "stat-3", value: "95%", label: "Client Approval", highlighted: true },
      { id: "stat-4", value: "13+", label: "Sectors Advised" },
    ];
  }

  public static getAdvocates(): AdvocateModel[] {
    return [
      {
        id: "prem-kandpal",
        name: "Prem Kandpal",
        designation: "Advocate | Lead Counsel",
        qualifications: "LLB, LL.M. (NLUJ)",
        bio: "Prem is an accomplished legal professional with over a decade of experience specializing in taxation, corporate, and regulatory laws. A law graduate from Delhi University and an LL.M. holder from National Law University, Jodhpur—where he specialized in tax and corporate laws—Prem brings a robust blend of academic excellence and hands-on litigation expertise to his practice. Prem offers strategic legal counsel, litigation, and advisory services in complex matters relating to GST, Customs, Excise, VAT, Service Tax, Income Tax, Foreign Trade Policy, and economic offences.",
        specializations: ["GST & Indirect Tax", "Customs & Foreign Trade", "White-Collar Crime Defense", "Arbitration & Litigation"],
        experience: "10+ Years",
        notableClients: ["Samsung", "Philip Morris", "Carlsberg", "Pernod Ricard", "AB InBev", "Posco India", "DDCA", "B.L. Agro", "A2Z Infra", "Shri Lal Mahal Group"],
        isFoundingPartner: true
      },
      {
        id: "amrendra-singh",
        name: "Amrendra Singh",
        designation: "Advocate",
        qualifications: "BA LLB",
        bio: "Amrendra Singh is a qualified lawyer and a law graduate with significant experience in litigation and advisory services, particularly in the areas of Goods and Services Tax (GST), Customs, Foreign Trade Policy, and Commercial Laws. He regularly represents clients before various High Courts, Tribunals, and District Courts.",
        specializations: ["GST Practice", "Customs & FTP", "Commercial Litigation", "Regulatory Advisory"]
      },
      {
        id: "pramod-kandpal",
        name: "Pramod Kandpal",
        designation: "Advocate",
        qualifications: "LLB, CA (IPCC), M. Com",
        bio: "Pramod Kandpal is a seasoned legal professional practicing in Delhi, holding an LLB from Delhi University, M.Com from Khalsa College, and CA (IPCC) qualification from ICAI. With a robust foundation in both law and commerce, Pramod provides comprehensive advisory and litigation services in Income Tax, GST, corporate law, and regulatory compliance.",
        specializations: ["Direct Tax & Income Tax", "GST Adjudication", "Corporate Law", "Financial Regulatory"]
      },
      {
        id: "ketan-jain",
        name: "Ketan Jain",
        designation: "Advocate",
        qualifications: "LL.B.",
        bio: "Ketan Jain is an experienced advocate with over six years of dedicated practice in litigation and legal advisory services, focusing on indirect tax laws and regulatory matters. He has played a pivotal role in preparing policy representations before the Central Board of Indirect Taxes and Customs (CBIC).",
        specializations: ["Indirect Tax Litigation", "CBIC Policy Submissions", "Service Tax & Excise", "Writ Petitions"],
        experience: "6+ Years",
        notableClients: ["Carlsberg", "Gawar Construction", "Pernod Ricard", "A2Z Infra", "ITI Limited"]
      },
      {
        id: "nakul-sehgal",
        name: "Nakul Sehgal",
        designation: "Advocate",
        qualifications: "LLB, LLM",
        bio: "Nakul Sehgal is a law graduate from Delhi University and holds an LLM from Kurukshetra University. With over 6 years of experience in litigation and advisory work, he serves as panel counsel for NBCC (India) Ltd. and specializes in arbitration, commercial disputes, insolvency, banking, and PMLA matters.",
        specializations: ["Arbitration & PMLA", "Bail & Criminal Practice", "Corporate Disputes", "Panel Counsel NBCC"],
        experience: "6+ Years"
      },
      {
        id: "rohit-gupta",
        name: "Rohit Gupta",
        designation: "Advocate-on-Record (AOR)",
        qualifications: "Faculty of Law, DU",
        bio: "Rohit Gupta is an Advocate-on-Record with over 8 years of experience specializing in commercial and property law, family disputes, and succession matters. He regularly appears before the Hon’ble Supreme Court of India and High Courts.",
        specializations: ["Supreme Court AOR Practice", "Commercial & Property Law", "Succession & Family Law"],
        experience: "8+ Years"
      },
      {
        id: "himanshu-gupta",
        name: "Himanshu Gupta",
        designation: "Advocate",
        qualifications: "LL.B.",
        bio: "Associate Advocate focusing on courtroom litigation, civil disputes, and advisory.",
        specializations: ["Dispute Resolution", "Civil Litigation"]
      },
      {
        id: "ankur-saini",
        name: "Ankur Saini",
        designation: "Advocate",
        qualifications: "LL.B.",
        bio: "Associate Advocate representing corporate clients in tax and commercial disputes.",
        specializations: ["Taxation Disputes", "Regulatory Compliances"]
      },
      {
        id: "atharv-prabhakar",
        name: "Atharv Prabhakar",
        designation: "Advocate",
        qualifications: "LL.B.",
        bio: "Associate Advocate assisting in arbitration, writs, and regulatory proceedings.",
        specializations: ["Arbitration", "Courtroom Advocacy"]
      },
    ];
  }

  public static getPracticeAreas(): PracticeAreaModel[] {
    return [
      {
        id: "indirect-tax",
        slug: "indirect-tax",
        title: "Indirect Tax (GST, Customs, SEZ)",
        subtitle: "GST, Customs, SEZ & Foreign Trade Policy, Service Tax & Excise",
        shortDescription: "Comprehensive advisory, litigation, and defense in GST, Customs, SEZ, Anti-Dumping, and legacy tax matters.",
        detailedProfile: {
          intro: "Aprajita Legal has developed a specialized and robust Indirect Tax practice catering to complex requirements under India's GST, Customs, SEZ, and legacy tax frameworks.",
          services: [
            {
              category: "Goods & Services Tax (GST)",
              items: [
                "Interpretation and analysis of GST law, rules, and notifications",
                "Input Tax Credit, cross-border supply chains, e-invoicing, and RCM advisory",
                "Drafting replies to SCNs, audit objections, and departmental summons",
                "Representation before GSTAT, High Courts, and Supreme Court",
                "Strategic defense in DGGI investigations, tax raids, and arrest proceedings under Sec 132",
                "Refund claims (export of goods/services, inverted duty structure) and TRAN-1/TRAN-2 credit litigation"
              ]
            },
            {
              category: "Customs, SEZ & Foreign Trade Policy (FTP)",
              items: [
                "Classification of goods, valuation, concessional duty rules (IGCR 2017)",
                "Structuring SEZ/EOU units, duty benefits, and Development Commissioner representations",
                "Foreign Trade Policy schemes (Advance Auth, EPCG, RoDTEP, DGFT approvals)",
                "Litigation before CESTAT, High Courts, and DRI / Customs Preventive defense"
              ]
            },
            {
              category: "Legacy Indirect Tax (Service Tax, Excise & VAT)",
              items: [
                "Managing open assessments, audit memos, and legacy CENVAT credit transitions",
                "Litigation before CESTAT, State VAT Tribunals, and Supreme Court",
                "Defense during DGCEI and State VAT enforcement investigations"
              ]
            }
          ]
        }
      },
      {
        id: "direct-tax",
        slug: "direct-tax",
        title: "Direct Tax & International Taxation",
        subtitle: "Income Tax, International Taxation, Transfer Pricing",
        shortDescription: "Strategic direct tax planning, treaty interpretation, transfer pricing audits, and defense in tax prosecutions.",
        detailedProfile: {
          intro: "We offer comprehensive legal solutions in Income Tax and International Taxation for corporations, High Net Worth Individuals, and multinational enterprises.",
          services: [
            {
              category: "Direct Tax Advisory & International Tax",
              items: [
                "Tax planning, TDS/TCS, tax residency, and POEM evaluation",
                "Cross-border structuring, DTAA treaty interpretation, PE risk assessment",
                "Repatriation strategies (royalties, dividends) and Equalisation Levy / SEP"
              ]
            },
            {
              category: "Transfer Pricing & Litigation",
              items: [
                "Intra-group transaction structuring and transfer pricing documentation",
                "APA / MAP support and representation in TP audits",
                "Appeals before Assessing Officers, CIT(A), ITAT, High Courts, and Supreme Court",
                "Defense in Income Tax criminal prosecutions, tax evasion, and search & seizure"
              ]
            }
          ]
        }
      },
      {
        id: "white-collar",
        slug: "white-collar",
        title: "White-Collar Crimes & Economic Offences",
        subtitle: "PMLA, Benami Act, Black Money Act, Tax Prosecutions",
        shortDescription: "Specialized legal defense in economic offence trials, financial investigations, and regulatory enforcement.",
        detailedProfile: {
          intro: "Aprajita Legal provides specialized defense for individuals and corporate entities facing investigation under PMLA, Benami, Black Money Act, and criminal tax provisions.",
          services: [
            {
              category: "Economic Offences & Financial Crime Defense",
              items: [
                "Prevention of Money Laundering Act (PMLA) defense before ED, Adjudicating Authorities, and Special Courts",
                "Bail, anticipatory bail, and challenging asset attachments under Section 5 PMLA",
                "Benami Transactions (Prohibition) Act representation and property attachment defense",
                "Black Money Act undisclosed offshore asset defense and Special Court appeals",
                "Criminal trial defense in GST Sec 132, Customs Act, and Income Tax prosecution"
              ]
            }
          ]
        }
      },
      {
        id: "commercial-disputes",
        slug: "commercial-disputes",
        title: "Commercial, Corporate & Civil Disputes",
        subtitle: "NCLT/NCLAT, Shareholder Disputes, Real Estate & RERA",
        shortDescription: "End-to-end legal advocacy in contractual breaches, corporate insolvency, shareholder suits, and civil writs.",
        detailedProfile: {
          intro: "Our litigation team delivers precise courtroom advocacy and pre-litigation strategy across all judicial and quasi-judicial forums in India.",
          services: [
            {
              category: "Corporate & Commercial Litigation",
              items: [
                "Breach of contract, supply chain disputes, recovery suits, and injunctions",
                "Shareholder & Boardroom disputes, oppression & mismanagement petitions before NCLT/NCLAT",
                "Director liability, fiduciary misconduct, and joint venture litigation",
                "Civil suits, property partition, civil writs, and RERA homebuyer/developer litigation"
              ]
            }
          ]
        }
      },
      {
        id: "arbitration",
        slug: "arbitration",
        title: "Arbitration & Conciliation (ADR)",
        subtitle: "Domestic & International Commercial Arbitration (SIAC, ICC, LCIA, DIAC)",
        shortDescription: "Dedicated ADR practice handling high-stakes commercial disputes and award enforcement.",
        detailedProfile: {
          intro: "We represent clients in domestic and international arbitrations under Indian law and institutional rules like SIAC, ICC, LCIA, and UNCITRAL.",
          services: [
            {
              category: "Arbitration & Court Proceedings",
              items: [
                "Ad-hoc & Institutional arbitration in infrastructure, real estate, energy, and corporate JVs",
                "Sec 11 appointment of arbitrators & Sec 9 interim court injunctions",
                "Challenge to arbitral awards under Sec 34 and enforcement/execution under Sec 36 & 48",
                "Representation before DIAC, ICADR, and foreign seated arbitral tribunals"
              ]
            }
          ]
        }
      },
      {
        id: "banking-ibc",
        slug: "banking-ibc",
        title: "Banking, Insolvency & Competition Law",
        subtitle: "NCLT/IBC Proceedings, DRT & SARFAESI, CCI Anti-Trust",
        shortDescription: "Financial recovery, corporate restructuring, SARFAESI enforcement, and antitrust market regulation.",
        detailedProfile: {
          intro: "Strategic counsel for banks, financial institutions, resolution professionals, and corporate debtors in insolvency and regulatory compliance.",
          services: [
            {
              category: "Insolvency, DRT & Competition",
              items: [
                "DRT & SARFAESI Act Original Applications (OA) and Securitization Applications (SA)",
                "CIRP initiation under Section 7, 9, 10 IBC before NCLT/NCLAT",
                "Resolution plan vetting, avoidance transactions, and liquidation proceedings",
                "CCI Anti-trust investigations, Abuse of Dominance, and merger notifications before NCLAT"
              ]
            }
          ]
        }
      },
    ];
  }

  public static getSectors(): string[] {
    return [
      "Manufacturing",
      "E-commerce & Global Logistics",
      "Steel & Metals",
      "Chemicals & Petrochemicals",
      "Real Estate & Infrastructure",
      "FMCG & Retail",
      "Financial Services & Banking",
      "Pharmaceuticals",
      "IT & Software",
      "Automotive & Auto Components",
      "Electronics & Engineering Goods",
      "Energy & Power",
      "Apparel & Textiles",
    ];
  }
}

export class JsonLdService {
  public static getLegalServiceSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Aprajita Legal",
      "description": "Boutique law firm based in New Delhi specializing in Indirect Tax (GST, Customs), Direct Tax, White-Collar Crimes, Arbitration, Commercial Disputes, and Corporate Law.",
      "url": "https://aprajitalegal.com",
      "telephone": "+91-8585988102",
      "email": "pclegaladvisor@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B-28, LGF, B-Block, Lajpat Nagar-III",
        "addressLocality": "New Delhi",
        "postalCode": "110024",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "GST Law", "Customs Law", "Income Tax", "White-Collar Crimes", "PMLA Defense", "Arbitration", "NCLT Litigation", "Foreign Trade Policy"
      ],
      "founders": [
        { "@type": "Person", "name": "Prem Kandpal" }
      ]
    };
  }
}
