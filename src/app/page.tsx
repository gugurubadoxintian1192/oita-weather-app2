"use client";

import React, { useState } from "react";
import { CloudSun, Wheat, Anchor, AlertTriangle, Thermometer, Wind, Waves, Navigation } from "lucide-react";

export default function OitaWeatherDashboard() {
  const [selectedRegion, setSelectedRegion] = useState("中部");
  const [activeTab, setActiveTab] = useState<"overview" | "agri" | "fishing">("overview");

  const regions = [
    { id: "中部", name: "大分・別府（中部）", type: "沿岸・都市部" },
    { id: "北部", name: "中津・宇佐（北部）", type: "平野・農地" },
    { id: "西部", name: "日田・玖珠（西部）", type: "盆地・高原" },
    { id: "南部", name: "佐伯・蒲江（南部）", type: "リアス沿岸" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      {/* ヘッダー */}
      <header className="max-w-6xl mx-auto mb-6 border-b border-slate-800 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-sky-400 flex items-center gap-2">
            <CloudSun className="w-8 h-8 text-amber-400" />
            大分県特化型 アグリ・マリン気象ポータル
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            大分県内4地域のアメダス・農業霜注意報・豊後水道海象データ集約ダッシュボード
          </p>
        </div>

        {/* 地域切替ボタン */}
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRegion(r.id)}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition ${
                selectedRegion === r.id
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {r.id}
            </button>
          ))}
        </div>
      </header>

      {/* タブ切り替え */}
      <div className="max-w-6xl mx-auto mb-6 flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition ${
            activeTab === "overview" ? "border-sky-400 text-sky-400" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <CloudSun className="w-4 h-4" /> 総合概要
        </button>
        <button
          onClick={() => setActiveTab("agri")}
          className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition ${
            activeTab === "agri" ? "border-emerald-400 text-emerald-400" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Wheat className="w-4 h-4" /> 🌾 農業・営農気象
        </button>
        <button
          onClick={() => setActiveTab("fishing")}
          className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition ${
            activeTab === "fishing" ? "border-blue-400 text-blue-400" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Anchor className="w-4 h-4" /> 🎣 豊後水道・釣り海象
        </button>
      </div>

      {/* メインコンテンツエリア */}
      <main className="max-w-6xl mx-auto space-y-6">
        {/* 地域表示バナー */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
          <div>
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">選択中の対象エリア</span>
            <h2 className="text-xl font-bold text-white mt-0.5">
              {regions.find((r) => r.id === selectedRegion)?.name}
            </h2>
          </div>
          <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
            {regions.find((r) => r.id === selectedRegion)?.type}
          </span>
        </div>

        {/* 総合概要タブ */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex justify-between items-center text-slate-400 text-sm mb-2">
                <span>今日の天気</span>
                <CloudSun className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">晴れ 時々 くもり</div>
              <div className="text-sm text-slate-300 flex gap-4">
                <span className="text-rose-400">最高 18℃</span>
                <span className="text-sky-400">最低 6℃</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex justify-between items-center text-slate-400 text-sm mb-2">
                <span>農業コンディション</span>
                <Wheat className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-emerald-400 mb-1">霜警戒判定: 安全</div>
              <p className="text-xs text-slate-400">予想最低気温 6℃ / 露点 2℃（霜の心配なし）</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex justify-between items-center text-slate-400 text-sm mb-2">
                <span>出船コンディション</span>
                <Anchor className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-blue-400 mb-1">出船可能（良好）</div>
              <p className="text-xs text-slate-400">波高: 0.8m / 北西の風 3m/s</p>
            </div>
          </div>
        )}

        {/* 農業タブ */}
        {activeTab === "agri" && (
          <div className="space-y-4">
            <div className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <AlertTriangle className="w-5 h-5" /> 霜注意報ステータス（日田・玖珠・安心院等の果樹・野菜対策）
              </div>
              <p className="text-sm text-slate-300">
                現在の気象条件（予想最低気温 6℃）では、早朝の着霜リスクは極めて低いです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">地中温度（深さ10cm）</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-amber-500" /> 14.2 ℃
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">14日間 累計積算温度</div>
                <div className="text-2xl font-bold text-white">182.5 ℃・日</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">露点温度</div>
                <div className="text-2xl font-bold text-white">2.1 ℃</div>
              </div>
            </div>
          </div>
        )}

        {/* 釣りタブ */}
        {activeTab === "fishing" && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Anchor className="w-5 h-5" /> 豊後水道・沿岸ポイント海象データ
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400">波の高さ</span>
                  <div className="text-2xl font-bold text-sky-400 mt-1 flex items-center gap-2">
                    <Waves className="w-5 h-5" /> 0.8 m
                  </div>
                  <span className="text-xs text-emerald-400">穏やか</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400">風向・風速</span>
                  <div className="text-2xl font-bold text-slate-100 mt-1 flex items-center gap-2">
                    <Wind className="w-5 h-5 text-slate-400" /> 北西 3.2 m/s
                  </div>
                  <span className="text-xs text-slate-400">微風</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400">潮汐（タイド）</span>
                  <div className="text-2xl font-bold text-amber-400 mt-1 flex items-center gap-2">
                    <Navigation className="w-5 h-5" /> 大潮
                  </div>
                  <span className="text-xs text-slate-400">満潮 06:12 / 干潮 12:45</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
