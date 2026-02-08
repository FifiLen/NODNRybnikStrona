"use client";
import { Header } from "@/components/layout-components/header";
import React from "react";

const CopyrightNotice = () => {
  return (
    <>
      <Header />
      <div className="copyright-notice">
        <div className="container">
          <header className="notice-header">
            <h2>{fixOrphans("Prawa autorskie do materiałów graficznych")}</h2>
          </header>

          <section className="notice-content">
            <p className="intro-text">
              {fixOrphans(
                "Wszystkie materiały graficzne prezentowane na stronie internetowej"
              )}{" "}
              <strong>
                {fixOrphans(
                  "Niepublicznego Ośrodka Doskonalenia Nauczycieli w Rybniku"
                )}
              </strong>{" "}
              {fixOrphans(
                "stanowią element autorskich zbiorów i albumów fotograficznych Ośrodka lub zostały przygotowane z wykorzystaniem profesjonalnych narzędzi graficznych działających w oparciu o komercyjne licencje."
              )}
            </p>

            <div className="tools-section">
              <h3>{fixOrphans("Wykorzystane narzędzia i platformy:")}</h3>
              <ul className="tools-list">
                <li>
                  <span className="tool-name">{fixOrphans("MidJourney")}</span>
                </li>
                <li>
                  <span className="tool-name">{fixOrphans("DALL·E")}</span>
                </li>
                <li>
                  <span className="tool-name">{fixOrphans("Canva")}</span>
                  <span className="license-info">
                    {fixOrphans("(wersja Pro z pełną licencją)")}
                  </span>
                </li>
                <li>
                  <span className="tool-name">
                    {fixOrphans("GPT-powered image tools")}
                  </span>
                </li>
                <li>
                  <span className="tool-name">{fixOrphans("Genially")}</span>
                  <span className="license-info">
                    {fixOrphans("(pełna licencja komercyjna)")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="legal-compliance">
              <p className="compliance-text">
                <strong>{fixOrphans("Wszelkie prawa do materiałów")}</strong>{" "}
                {fixOrphans(
                  "wykorzystywanych w tym zakresie są zgodne z warunkami licencyjnymi wskazanych usługodawców."
                )}
              </p>

              <p className="final-statement">
                {fixOrphans(
                  "Ośrodek dokłada najwyższej staranności, aby wszystkie grafiki stosowane na stronie internetowej były zgodne z obowiązującymi regulacjami prawnymi w zakresie prawa autorskiego oraz standardami etycznego wykorzystania treści cyfrowych."
                )}
              </p>
            </div>
          </section>
        </div>

        <style jsx>{`
          .copyright-notice {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            font-family: "Arial", sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .notice-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #e0e0e0;
          }

          .notice-header h2 {
            color: #2c3e50;
            font-size: 1.8rem;
            margin: 0;
            font-weight: 600;
          }

          .intro-text {
            margin-bottom: 2rem;
            font-size: 1rem;
            text-align: justify;
          }

          .tools-section {
            margin: 2rem 0;
            padding: 1.5rem;
            background: white;
            border-radius: 6px;
            border-left: 4px solid #3498db;
          }

          .tools-section h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.2rem;
          }

          .tools-list {
            list-style: none;
            padding: 0;
          }

          .tools-list li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .tools-list li:last-child {
            border-bottom: none;
          }

          .tool-name {
            font-weight: 600;
            color: #2980b9;
          }

          .license-info {
            font-size: 0.9rem;
            color: #7f8c8d;
            font-style: italic;
          }

          .legal-compliance {
            margin-top: 2rem;
            padding: 1.5rem;
            background: #ecf0f1;
            border-radius: 6px;
          }

          .compliance-text {
            margin-bottom: 1rem;
            font-size: 1rem;
          }

          .final-statement {
            margin: 0;
            font-weight: 500;
            color: #2c3e50;
          }

          @media (max-width: 768px) {
            .copyright-notice {
              margin: 1rem;
              padding: 1.5rem;
            }

            .notice-header h2 {
              font-size: 1.5rem;
            }

            .tools-list li {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.25rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default CopyrightNotice;




export function fixOrphans(text: string): string {

  const orphans = ["i", "a", "o", "u", "w", "z", "od", "do", "na", "za", "po"];

  let result = text;
  orphans.forEach((word) => {

    const regex = new RegExp(`\\b${word} `, "gi");
    result = result.replace(regex, `${word}\u00A0`);
  });

  return result;
}
