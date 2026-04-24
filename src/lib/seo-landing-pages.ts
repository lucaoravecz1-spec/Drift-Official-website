export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  paragraphs: string[];
  bullets: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "ai-meeting-notes-financial-advisors",
    title: "AI meeting notes for financial advisors",
    metaTitle: "AI Meeting Notes for Financial Advisors | Drift AI",
    metaDescription:
      "See how Drift helps financial advisors automate meeting notes, post-meeting follow-up, and compliance-safe documentation without extra admin work.",
    hero: "AI meeting notes for financial advisors that are ready to use after the call",
    intro:
      "Drift helps advisory firms turn live conversations into usable follow-up faster. Instead of recording a meeting, waiting for a transcript, and then manually rebuilding the real action items, Drift turns each conversation into meeting notes, next steps, client email drafts, and internal documentation that fit how RIAs already work.",
    paragraphs: [
      "Most advisory teams do not actually struggle with taking notes. They struggle with what happens after the notes. A client meeting creates portfolio questions, operations requests, compliance obligations, planning tasks, and follow-up communication. If the record of the meeting is too vague, the advisor has to reconstruct the conversation later. If the record is too messy, operations and compliance still need a second pass before anything can move. Drift is built to solve that exact gap.",
      "For firms searching for AI meeting notes for financial advisors, the real requirement is not a pretty transcript. The real requirement is a workflow that captures who said what, what the household decided, which documents were referenced, what actions need approval, and what the next client communication should look like. Drift organizes that into a working file instead of a wall of text.",
      "That matters for independent advisors and RIAs because every meeting creates downstream work. A review meeting may require client email drafting, a rebalance memo, a compliance note, and a task for operations to update records. Drift can create those outputs immediately while preserving the source context that generated them. That means the advisor spends less time rewriting the same ideas in four places.",
      "The compliance angle matters too. Financial advisor AI only becomes useful when firms trust the record it creates. Drift keeps each meeting output inside the same environment as review states, document context, and operator notes. Teams can check what the client asked, what was drafted, and what still requires approval before anything leaves the system.",
      "This also creates better service. When advisors come back to a household a week later, they do not have to remember everything from memory. They can open one record and see the meeting summary, the tasks that were assigned, the client email draft, and the follow-up status in the same place. That is how AI meeting notes start saving real time instead of creating another tool to review.",
      "If your team is evaluating AI meeting notes for financial advisors, the question to ask is simple: do we want a transcript, or do we want a workflow outcome? Drift is designed for the second category. The goal is not just documentation. The goal is cleaner execution after every meeting.",
    ],
    bullets: [
      "Generate advisor-ready meeting summaries instead of raw transcripts",
      "Turn meeting context into client email drafting and internal follow-up tasks",
      "Keep notes, approvals, and compliance review connected in one workflow",
      "Reduce manual re-entry across CRM, operations, and post-meeting prep",
    ],
    faq: [
      {
        question: "How is Drift different from generic AI note takers?",
        answer:
          "Generic note tools focus on transcription. Drift focuses on advisory workflow outcomes, including next steps, client email drafting, and compliance-safe documentation.",
      },
      {
        question: "Can RIAs review meeting outputs before they are sent?",
        answer:
          "Yes. Drift keeps post-meeting outputs inside the workflow so advisors, operators, and compliance teams can review them before they move forward.",
      },
    ],
  },
  {
    slug: "email-automation-ria",
    title: "Email automation for RIAs",
    metaTitle: "Email Automation for RIAs | Drift AI",
    metaDescription:
      "Automate client follow-up, review reminders, and advisor email drafting with workflow controls built for RIAs and compliance-conscious firms.",
    hero: "Email automation for RIAs that still sounds like the advisor",
    intro:
      "Email automation for RIAs should not feel like mass marketing software dropped into a regulated business. Drift helps firms draft client follow-up, review reminders, document requests, and internal coordination emails while keeping household context, tone, and compliance review attached.",
    paragraphs: [
      "Most advisory firms do not need more ways to send email. They need fewer minutes spent rewriting the same follow-up after every client meeting. A good email workflow starts with context: what was discussed, which accounts are involved, which documents are pending, and which tone matches the relationship. Drift brings those pieces together so the advisor starts from a strong draft rather than a blank screen.",
      "That makes a difference for RIAs because client email drafting is rarely a standalone task. It usually sits inside a larger operating flow that includes meeting notes, portfolio questions, planning items, and internal handoffs. If the email tool is disconnected from the rest of that workflow, the advisor still has to reconstruct what happened. Drift avoids that by drafting email from the same working context used across the rest of the household file.",
      "This is where email automation for RIAs becomes more than a convenience feature. When the system already knows the meeting summary, the requested next steps, and the documents that matter, it can draft more precise follow-up. Advisors spend less time editing structure and more time confirming judgment. That shortens turnaround while keeping the message personalized.",
      "Compliance matters here as well. Advisory firms need confidence that outbound communication does not drift away from policy. Drift keeps drafts visible inside the same review environment used for other workflows. Teams can inspect what was written, what sources informed it, and whether additional approval is needed before the message goes out.",
      "Email automation also improves the client experience when it is used well. Clients notice speed, clarity, and continuity. A strong system sends the right follow-up quickly, references the actual meeting, and reflects the relationship without sounding robotic. Drift is built to make that process repeatable at firm scale.",
      "If your team is evaluating email automation for RIA workflows, the important question is not whether AI can write emails. It can. The real question is whether the emails stay anchored to household context, review processes, and operational reality. That is the category Drift is built for.",
    ],
    bullets: [
      "Draft client follow-ups directly from meeting context",
      "Support advisor voice while reducing manual writing time",
      "Keep email review tied to household data and compliance controls",
      "Standardize recurring outreach without sounding generic",
    ],
    faq: [
      {
        question: "Does Drift replace our email platform?",
        answer:
          "No. Drift improves drafting and review. Firms can still send through their existing communication stack.",
      },
      {
        question: "Can email drafts be reviewed before they are used?",
        answer:
          "Yes. Advisors and compliance teams can review client email drafts before they leave the workflow.",
      },
    ],
  },
  {
    slug: "ai-document-summary",
    title: "AI document summarization for financial advisors",
    metaTitle: "AI Document Summaries for Financial Advisors | Drift AI",
    metaDescription:
      "Summarize IPS documents, trust records, statements, and planning materials faster with AI document workflows built for advisory teams.",
    hero: "AI document summaries built for the files advisors actually work with",
    intro:
      "Financial advisors deal with dense documents every week: IPS agreements, trust instruments, account statements, policy updates, client reports, and planning materials. Drift helps firms summarize those documents quickly without losing the details that matter for advisory work.",
    paragraphs: [
      "The value of AI document summarization in advisory firms is not speed alone. It is speed with judgment preserved. A summary is only useful if it helps the advisor understand what changed, what matters for the client, and which follow-up actions are needed. Drift is designed for that use case rather than generic document compression.",
      "Many firms already have tools that can extract text from a PDF. That is not the hard part. The hard part is turning the text into something actionable for a financial team. Drift helps organize the important points, reference the underlying material, and connect the summary to downstream workflows like meeting prep, compliance review, or client email drafting.",
      "This becomes especially useful for RIAs handling a wide range of client materials. A trust document might create questions for planning and operations. An IPS agreement might shape what an advisor can recommend. A custodial statement might flag follow-up before a review meeting. If those summaries remain isolated, the team still has to do additional manual work. Drift keeps the summary inside the working flow so the next action is easier to take.",
      "Financial advisor AI also needs to be transparent about where it is drawing conclusions from. Drift is designed to keep the source relationship visible so teams can move from a summary back to the original material when needed. That is important for trust, accuracy, and internal review.",
      "Advisory operations also benefit from consistency. When the firm uses the same summary structure across documents, teams can scan more quickly and make better handoffs. Drift helps standardize how document takeaways are presented without flattening every document into the same meaningless format.",
      "If your team is searching for AI document summaries in a financial advisor workflow, the goal is not just reading faster. The goal is making each document easier to act on. Drift helps firms move from documents to decisions with less friction.",
    ],
    bullets: [
      "Summarize IPS files, trust documents, and statements faster",
      "Connect document takeaways to meeting prep and follow-up workflows",
      "Keep source context visible for advisor and compliance review",
      "Standardize summaries across high-volume advisory operations",
    ],
    faq: [
      {
        question: "What kinds of documents can Drift summarize?",
        answer:
          "Drift is suited for common advisory documents including IPS agreements, statements, planning files, trust records, and firm policy materials.",
      },
      {
        question: "Can summaries feed other workflows?",
        answer:
          "Yes. Summaries can support meeting prep, client email drafting, internal review, and broader RIA workflow automation.",
      },
    ],
  },
  {
    slug: "wealthbox-ai-integration",
    title: "Wealthbox AI integration",
    metaTitle: "Wealthbox AI Integration for RIAs | Drift AI",
    metaDescription:
      "Connect Wealthbox context to meeting notes, advisor workflows, and client follow-up with an AI integration layer designed for RIAs.",
    hero: "A Wealthbox AI integration that supports real advisory workflows",
    intro:
      "Wealthbox is already where many RIAs keep relationship and activity data. Drift helps firms extend that context into AI meeting notes, client follow-up, document summaries, and workflow automation without forcing advisors to abandon the CRM they already use.",
    paragraphs: [
      "When firms look for a Wealthbox AI integration, they are usually trying to solve a practical problem: they want the value stored in the CRM to show up inside daily execution. Client context should not live in one place while meeting notes, email drafting, and operational work happen somewhere else. Drift is built to bridge that gap.",
      "A strong integration starts by making the right relationship data available at the right moment. That includes household identity, recent activity, open tasks, and key notes. When that context is available to the workflow, Drift can produce better summaries, stronger drafts, and cleaner follow-up after meetings or client requests.",
      "This is especially important for RIAs because CRM usage is tightly tied to client service quality. If AI outputs are disconnected from Wealthbox, advisors still need to manually copy details into every task or message. That lowers trust and adds friction. Drift helps the CRM context travel with the work instead of staying trapped in a separate tool.",
      "A Wealthbox AI integration also needs to respect how firms actually operate. Some teams want better AI meeting notes for advisors. Others care more about client email drafting, document summaries, or compliance workflow automation. The value of the integration is that one set of client context can support all of those use cases inside the same environment.",
      "Compliance and review matter too. Advisory firms need a clearer picture of what the AI did with CRM information, which outputs were drafted, and what still requires human approval. Drift keeps those review states visible so the integration feels operationally safe instead of opaque.",
      "If your firm is evaluating Wealthbox AI options, the right question is not whether the CRM can technically connect to an AI tool. The right question is whether the connection makes advisors faster while keeping context, controls, and service quality intact. Drift is designed around that outcome.",
    ],
    bullets: [
      "Bring Wealthbox context into notes, drafts, and follow-up workflows",
      "Reduce manual copying between CRM records and advisory tasks",
      "Support AI meeting notes for advisors and client email drafting",
      "Keep CRM-informed outputs reviewable before they move forward",
    ],
    faq: [
      {
        question: "Why does Wealthbox context matter for AI workflows?",
        answer:
          "Because better client context produces better outputs. Meeting notes, drafts, and summaries become more useful when they reflect real household information and recent CRM activity.",
      },
      {
        question: "Is this only for one use case?",
        answer:
          "No. Wealthbox context can support RIA workflow automation across notes, email, document work, and internal coordination.",
      },
    ],
  },
  {
    slug: "ai-compliance-workflows",
    title: "AI compliance tools for advisors",
    metaTitle: "AI Compliance Tools for Financial Advisors | Drift AI",
    metaDescription:
      "Build compliance workflow automation for advisory teams with visible approvals, audit history, and AI outputs that stay reviewable.",
    hero: "AI compliance tools for advisors that keep review visible",
    intro:
      "The hardest part of using AI in an advisory firm is not writing drafts or summarizing documents. The hardest part is making those outputs governable. Drift helps firms build compliance workflow automation that keeps approvals, audit history, and operator review inside the same system as the work itself.",
    paragraphs: [
      "Many firms exploring AI compliance tools for advisors are really trying to answer a trust question. Can we use automation without creating a black box? Drift is built for that scenario. It keeps the work, the review process, and the record of what happened connected in one place so leadership has a clearer operating picture.",
      "That matters because advisory compliance is rarely a single event. It shows up across drafting, approvals, handoffs, disclosures, and documented follow-up. If those states live in different tools, teams lose visibility quickly. Drift is designed to keep that chain intact so compliance leaders can see how outputs moved from draft to decision.",
      "For RIAs, compliance workflow automation should reduce manual checking without removing judgment. A strong system should route sensitive items for review, make approval ownership explicit, and preserve audit-safe history. Drift helps firms create those patterns around common advisor workflows rather than adding governance as an afterthought.",
      "This also makes other forms of financial advisor AI more usable. AI meeting notes for advisors become more valuable when the meeting record can support reviewed follow-up. Client email drafting becomes more practical when teams know what still requires approval. Document summaries become more useful when they can flow into governed workflows instead of living as isolated outputs.",
      "Operationally, this creates a better relationship between advisors and compliance teams. Instead of fighting over process after the fact, both groups can work from the same workflow state. Advisors move faster, and compliance leaders have a more reliable system for oversight.",
      "If your firm is searching for AI compliance tools for advisors, the goal should not just be risk reduction. The goal should be a workflow that is easier to trust, easier to review, and easier to scale. Drift is built to support that level of operational discipline.",
    ],
    bullets: [
      "Keep approval states visible alongside AI-generated work",
      "Support audit-safe history for advisory workflows",
      "Route sensitive outputs for review before they move forward",
      "Turn compliance workflow automation into part of the product, not a manual overlay",
    ],
    faq: [
      {
        question: "Does Drift replace the compliance team?",
        answer:
          "No. Drift helps compliance teams review and govern work more efficiently. It does not remove the need for human judgment.",
      },
      {
        question: "Can compliance workflows cover more than one task type?",
        answer:
          "Yes. Firms can apply review patterns across meeting notes, client email drafting, document summaries, and broader RIA workflow automation.",
      },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
