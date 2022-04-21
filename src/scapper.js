const text = [
  {
    heading:
      "Google Using AI To Automatically Update Some Business Information",
    link: "https://news.google.com/articles/CAIiEGPPhC526FF4SMA1COuoiVsqGQgEKhAIACoHCAowkrWiCTCGg5gCMMXcnQc?uo=CAUibWh0dHBzOi8vd3d3LnNlYXJjaGVuZ2luZWpvdXJuYWwuY29tL2dvb2dsZS11c2luZy1haS10by1hdXRvbWF0aWNhbGx5LXVwZGF0ZS1zb21lLWJ1c2luZXNzLWluZm9ybWF0aW9uLzQ0NTQ4MC_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "OpenAI releases AI tool that can produce an image from text",
    link: "https://news.google.com/articles/CAIiENpsTyFCgsEEIniuDcHSzJYqGQgEKhAIACoHCAowzuOICzCZ4ocDMPX1qQY",
  },
  {
    heading: "DALL-E 2, the future of AI research, and OpenAI’s business model",
    link: "https://news.google.com/articles/CAIiEFp5o8GJ1naX-7yakCzOb88qEwgEKgwIACoFCAowsGkw8AYwgxM",
  },
  {
    heading:
      "Robots are creating images and telling jokes. 5 things to know about foundation models and the next generation of AI",
    link: "https://news.google.com/articles/CBMilgFodHRwczovL3RoZWNvbnZlcnNhdGlvbi5jb20vcm9ib3RzLWFyZS1jcmVhdGluZy1pbWFnZXMtYW5kLXRlbGxpbmctam9rZXMtNS10aGluZ3MtdG8ta25vdy1hYm91dC1mb3VuZGF0aW9uLW1vZGVscy1hbmQtdGhlLW5leHQtZ2VuZXJhdGlvbi1vZi1haS0xODExNTDSAZoBaHR0cHM6Ly90aGVjb252ZXJzYXRpb24uY29tL2FtcC9yb2JvdHMtYXJlLWNyZWF0aW5nLWltYWdlcy1hbmQtdGVsbGluZy1qb2tlcy01LXRoaW5ncy10by1rbm93LWFib3V0LWZvdW5kYXRpb24tbW9kZWxzLWFuZC10aGUtbmV4dC1nZW5lcmF0aW9uLW9mLWFpLTE4MTE1MA",
  },
  {
    heading: "The AI That Draws What You Type Is Very Racist, Shocking No One",
    link: "https://news.google.com/articles/CAIiEIvWYb4xocHe6aPUo-TxEM8qFwgEKg4IACoGCAowis8wMLmCBjCfodQD",
  },
  {
    heading: "DALL-E, the Metaverse, and Zero Marginal Content",
    link: "https://news.google.com/articles/CBMiTGh0dHBzOi8vc3RyYXRlY2hlcnkuY29tLzIwMjIvZGFsbC1lLXRoZS1tZXRhdmVyc2UtYW5kLXplcm8tbWFyZ2luYWwtY29udGVudC_SAQA",
  },
  {
    heading: "Google doesn't want your AI-generated SEO spam content",
    link: "https://news.google.com/articles/CBMiRGh0dHBzOi8vc2VhcmNoZW5naW5lbGFuZC5jb20vZ29vZ2xlLWFpLWdlbmVyYXRlZC1jb250ZW50LXNwYW0tMzgzNDU00gEA",
  },
  {
    heading: "Computers as Poets: OpenAI's Algorithmic Poetry",
    link: "https://news.google.com/articles/CAIiEERrUOfNYrpBpRNYrMNaUKkqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw",
  },
  {
    heading: "AI Fuses With Quantum Computing in Promising New Memristor",
    link: "https://news.google.com/articles/CAIiEONdgJL6VS0_s4YoPoVrPaAqMwgEKioIACIQmdeZ12vAlXdtdcHy0XNTdioUCAoiEJnXmddrwJV3bXXB8tFzU3Yw5P74Bg",
  },
  {
    heading:
      "Researchers generate high-quality quantum light with modular waveguide device",
    link: "https://news.google.com/articles/CAIiEKUHsK9hn-MXHGlxoFIdaggqGAgEKg8IACoHCAowpbDpAzCm_hww3eXGBg",
  },
  {
    heading: "How to build brain-inspired neural networks based on light",
    link: "https://news.google.com/articles/CAIiEDt6a_SM-eL_IkVcxPathLIqGQgEKhAIACoHCAowgvzyCjCh_NkCMNvtxgY",
  },
  {
    heading:
      "Ex-Google DeepMind Employee Blasts Its Response to Harassment Letter",
    link: "https://news.google.com/articles/CAIiEIOzg_45Q-GbXoZx61C7ARsqLggEKiUIACIbd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vc2FpKgQICjAMMNfv5wE?uo=CAUiZ2h0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vZXgtZ29vZ2xlLWRlZXBtaW5kLWVtcGxveWVlLWJsYXN0cy1yZXNwb25zZS10by1oYXJhc3NtZW50LWxldHRlci0yMDIyLTTSAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "A newcomer to AI data labeling, Encord looks to ride a rising tidal wave",
    link: "https://news.google.com/articles/CAIiENRYmdTrhvU_VbrfMxpzkCYqFggEKg0IACoGCAowlIEBMLEXMNCAlgc?uo=CAUiamh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8wOC9hLW5ld2NvbWVyLXRvLWFpLWRhdGEtbGFiZWxpbmctZW5jb3JkLWxvb2tzLXRvLXJpZGUtYS1yaXNpbmctdGlkYWwtd2F2ZS_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Leaked Email: DeepMind Exec Defends Handling of Sexual Assault Case",
    link: "https://news.google.com/articles/CAIiEHLrMG7w1LzhWzC1q1267GMqLggEKiUIACIbd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vc2FpKgQICjAMMNfv5wE?uo=CAUiaWh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vbGVha2VkLWVtYWlsLWRlZXBtaW5kLWV4ZWMtZGVmZW5kcy1oYW5kbGluZy1vZi1zZXh1YWwtYXNzYXVsdC1jYXNlLTIwMjItNNIBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Lilt raises $55M to bolster its business-focused AI translation platform",
    link: "https://news.google.com/articles/CAIiEFBujNcSmtu69_xCQEAdk_0qFggEKg0IACoGCAowlIEBMLEXMNCAlgc",
  },
  {
    heading: "Quiq Raises $25 Million Series C Funding Led by Baird Capital",
    link: "https://news.google.com/articles/CBMidGh0dHBzOi8vd3d3LnBybmV3c3dpcmUuY29tL25ld3MtcmVsZWFzZXMvcXVpcS1yYWlzZXMtMjUtbWlsbGlvbi1zZXJpZXMtYy1mdW5kaW5nLWxlZC1ieS1iYWlyZC1jYXBpdGFsLTMwMTUyMzYxNi5odG1s0gEA",
  },
  {
    heading: "Proving that chatbots are alive and kicking, Quiq raises $25M",
    link: "https://news.google.com/articles/CAIiEM0xBqv_gV2nFob57Odm6iQqFggEKg0IACoGCAowlIEBMLEXMNCAlgc",
  },
  {
    heading:
      "This Startup Raised $18.5 Million From Sequoia To Reinvent How To Use AI To Make Predictions",
    link: "https://news.google.com/articles/CAIiEOXcngTKLpY12iZNTl-T1i0qFQgEKg0IACoGCAowrqkBMKBFMMGBAg?uo=CAUihwFodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2tlbnJpY2tjYWkvMjAyMi8wNC8wNy9rdW1vLTE4LW1pbGxpb24tc2VyaWVzLWEtZnJvbS1zZXF1b2lhLXRvLXJlaW52ZW50LWhvdy10by11c2UtYWktdG8tbWFrZS1wcmVkaWN0aW9ucy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Fact Check: SpaceX and its AI Capabilities Outperforming NASA?",
    link: "https://news.google.com/articles/CAIiEGz5Tz9J1ffLND4GFnlVJL4qMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiXmh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2ZhY3QtY2hlY2stc3BhY2V4LWFuZC1pdHMtYWktY2FwYWJpbGl0aWVzLW91dHBlcmZvcm1pbmctbmFzYS_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "ML models and Intelligent Automation: Key to Decentralized Learning",
    link: "https://news.google.com/articles/CAIiEPIgtJFvOsEc2FUowh2SOLsqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiZGh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L21sLW1vZGVscy1hbmQtaW50ZWxsaWdlbnQtYXV0b21hdGlvbi1rZXktdG8tZGVjZW50cmFsaXplZC1sZWFybmluZy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Everything You Need to Know about Intelligent RAN Automation",
    link: "https://news.google.com/articles/CAIiEJqaNarhQUhURGm7rpQk0bYqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiXmh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2V2ZXJ5dGhpbmcteW91LW5lZWQtdG8ta25vdy1hYm91dC1pbnRlbGxpZ2VudC1yYW4tYXV0b21hdGlvbi_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Top 10 AI companies recently acquired by FAANG in 2022",
    link: "https://news.google.com/articles/CAIiEMp2epkf6UK0D74O1vKbiBMqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw",
  },
  {
    heading: "Want to Land Your Dream ML Job at Tesla? Here's How?",
    link: "https://news.google.com/articles/CAIiENgS_iGRby8P_qnFl6H_FAkqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiU2h0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L3dhbnQtdG8tbGFuZC15b3VyLWRyZWFtLW1sLWpvYi1hdC10ZXNsYS1oZXJlcy1ob3cv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "AI is Transforming the Modern Tech Industry in More Ways Than One",
    link: "https://news.google.com/articles/CAIiELEC8pgc1CGiq1h569hmWAoqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiY2h0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2FpLWlzLXRyYW5zZm9ybWluZy10aGUtbW9kZXJuLXRlY2gtaW5kdXN0cnktaW4tbW9yZS13YXlzLXRoYW4tb25lL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Why Robotics in Early Education is Important for a STEM Future?",
    link: "https://news.google.com/articles/CAIiEBn3Fyc8t-nj6YtFRinEF4oqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiYGh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L3doeS1yb2JvdGljcy1pbi1lYXJseS1lZHVjYXRpb24taXMtaW1wb3J0YW50LWZvci1hLXN0ZW0tZnV0dXJlL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Top 5 Diploma Programs In Artificial Intelligence for Tech Enthusiasts",
    link: "https://news.google.com/articles/CAIiEJH_C-cyMprjwnwTYM4T7_cqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiaGh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L3RvcC01LWRpcGxvbWEtcHJvZ3JhbXMtaW4tYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtZm9yLXRlY2gtZW50aHVzaWFzdHMv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Robots Developing the Unique Sixth Sense, Thanks to Advanced Research",
    link: "https://news.google.com/articles/CAIiEOy6cmu4T04uXgB9he5-V3wqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiZmh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L3JvYm90cy1kZXZlbG9waW5nLXRoZS11bmlxdWUtc2l4dGgtc2Vuc2UtdGhhbmtzLXRvLWFkdmFuY2VkLXJlc2VhcmNoL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Amazing “Connect Fore!” Robot Challenges Your Putting Practice",
    link: "https://news.google.com/articles/CAIiEOSrVEWYfjYgExidfkgzavIqGQgEKhAIACoHCAow-vmECzDCg4IDMMWChQY?uo=CAUiXGh0dHBzOi8vaGFja2FkYXkuY29tLzIwMjIvMDQvMDkvYW1hemluZy1jb25uZWN0LWZvcmUtcm9ib3QtY2hhbGxlbmdlcy15b3VyLXB1dHRpbmctcHJhY3RpY2Uv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Video Friday: DALL-E 2",
    link: "https://news.google.com/articles/CAIiEFa_W7VF6aujNstKMT_VO7YqMwgEKioIACIQmdeZ12vAlXdtdcHy0XNTdioUCAoiEJnXmddrwJV3bXXB8tFzU3YwtNrOBw?uo=CAUiL2h0dHBzOi8vc3BlY3RydW0uaWVlZS5vcmcvdmlkZW8tZnJpZGF5LWRhbGwtZS0y0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "DesignCon Keynote: Unraveling the Hype of AI",
    link: "https://news.google.com/articles/CBMiV2h0dHBzOi8vd3d3LmRlc2lnbm5ld3MuY29tL2FydGlmaWNpYWwtaW50ZWxsaWdlbmNlL2Rlc2lnbmNvbi1rZXlub3RlLXVucmF2ZWxpbmctaHlwZS1hadIBAA",
  },
  {
    heading: "AI takes aim at employee turnover",
    link: "https://news.google.com/articles/CBMiSWh0dHBzOi8vd3d3LmNpby5jb20vYXJ0aWNsZS8zMDc5ODAvYWktdGFrZXMtYWltLWF0LWVtcGxveWVlLXR1cm5vdmVyLmh0bWzSAU1odHRwczovL3d3dy5jaW8uY29tL2FydGljbGUvMzA3OTgwL2FpLXRha2VzLWFpbS1hdC1lbXBsb3llZS10dXJub3Zlci5odG1sL2FtcA",
  },
  {
    heading:
      "BlueOcean raises $30M for its AI-based brand intelligence platform",
    link: "https://news.google.com/articles/CAIiEJL-KHtUmHn41uznKC-LSfYqFAgEKg0IACoGCAowlIEBMLEXMOc_?uo=CAUiZGh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMy9ibHVlb2NlYW4tcmFpc2VzLTMwbS1mb3ItaXRzLWFpLWJhc2VkLWJyYW5kLWludGVsbGlnZW5jZS1wbGF0Zm9ybS_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Zoom launches AI-powered features aimed at sales teams",
    link: "https://news.google.com/articles/CAIiEGNwkoP7pKf3eBEFl8wLxnwqFggEKg0IACoGCAowlIEBMLEXMNCAlgc?uo=CAUiWWh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMy96b29tLWxhdW5jaGVzLWFpLXBvd2VyZWQtZmVhdHVyZXMtYWltZWQtYXQtc2FsZXMtdGVhbXMv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Noogata closes $16 million Series A for AI analytics platform | CTech",
    link: "https://news.google.com/articles/CBMiOGh0dHBzOi8vd3d3LmNhbGNhbGlzdGVjaC5jb20vY3RlY2huZXdzL2FydGljbGUvYmthYmlnNzQ10gEA",
  },
  {
    heading: "What's next for AlphaFold and the AI protein-folding revolution",
    link: "https://news.google.com/articles/CBMiMmh0dHBzOi8vd3d3Lm5hdHVyZS5jb20vYXJ0aWNsZXMvZDQxNTg2LTAyMi0wMDk5Ny010gEA",
  },
  {
    heading:
      "Autonomous robots used in hundreds of hospitals at risk of remote hijacks",
    link: "https://news.google.com/articles/CAIiEHYyB9cnJgjX64GR8LQrgIUqFAgEKg0IACoGCAowlIEBMLEXMOc_?uo=CAUiQmh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMi9hZXRob24tcm9ib3RzLWhvc3BpdGFscy1oaWphY2tzL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "EvolutionIQ secures $21M to streamline insurance claims processing with AI",
    link: "https://news.google.com/articles/CAIiENQG4hYoVMIWEJisR8mPHzYqFggEKg0IACoGCAowlIEBMLEXMNCAlgc?uo=CAUibGh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMi9ldm9sdXRpb25pcS1zZWN1cmVzLTIxbS10by1zdHJlYW1saW5lLWluc3VyYW5jZS1jbGFpbXMtcHJvY2Vzc2luZy13aXRoLWFpL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Union.ai raises $10M to simplify AI and ML workflow orchestration",
    link: "https://news.google.com/articles/CAIiEG4zMXRey-bIk580ZYMBJQUqFggEKg0IACoGCAowlIEBMLEXMNCAlgc?uo=CAUiY2h0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMi91bmlvbi1haS1yYWlzZXMtMTBtLXRvLXNpbXBsaWZ5LWFpLWFuZC1tbC13b3JrZmxvdy1vcmNoZXN0cmF0aW9uL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Neptune.ai raises $8M to streamline ML model development",
    link: "https://news.google.com/articles/CAIiEEHArRg3UxHK0-iS0qh1VlgqFQgEKgwIACoFCAowsGkw8AYw7eb1BQ?uo=CAUiW2h0dHBzOi8vdmVudHVyZWJlYXQuY29tLzIwMjIvMDQvMTIvbmVwdHVuZS1haS1yYWlzZXMtOG0tdG8tc3RyZWFtbGluZS1tbC1tb2RlbC1kZXZlbG9wbWVudC_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Qualcomm Edge AI Vision kit combines Qualcomm QCS610 SoC &amp; Sony IMX415 4K ultra low light camera",
    link: "https://news.google.com/articles/CAIiEBS1HtHVGn71hALIyNiiLhYqMwgEKioIACIQ5dnoeENmQJKYfUl9H0BxcyoUCAoiEOXZ6HhDZkCSmH1JfR9AcXMw6ojnBg?uo=CAUihwFodHRwczovL3d3dy5jbngtc29mdHdhcmUuY29tLzIwMjIvMDQvMTIvcXVhbGNvbW0tZWRnZS1haS12aXNpb24ta2l0LWNvbWJpbmVzLXF1YWxjb21tLXFjczYxMC1zb2Mtc29ueS1pbXg0MTUtNGstdWx0cmEtbG93LWxpZ2h0LWNhbWVyYS_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "IBM's new Qiskit primitives make it easier to develop algorithms for quantum computers",
    link: "https://news.google.com/articles/CAIiEIr7WGPAntfy8MQKwyJ_WNgqFQgEKg0IACoGCAow8KsBMMBFMPGBAg?uo=CAUiZ2h0dHBzOi8vdGhlbmV4dHdlYi5jb20vbmV3cy9pYm1zLW5ldy1xaXNraXQtcHJpbWl0aXZlcy1tYWtlLWVhc2llci1kZXZlbG9wLWFsZ29yaXRobXMtcXVhbnR1bS1jb21wdXRlcnPSAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Observe.ai raises $125M, adding Zoom as an investor, to supercharge the contact center market",
    link: "https://news.google.com/articles/CAIiECjZjODwNkGXcWlAZQ4gfccqFAgEKg0IACoGCAowlIEBMLEXMOc_?uo=CAUifWh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8xMi9vYnNlcnZlLWFpLXJhaXNlcy0xMjVtLWFkZGluZy16b29tLWFzLWFuLWludmVzdG9yLXRvLXN1cGVyY2hhcmdlLXRoZS1jb250YWN0LWNlbnRlci1tYXJrZXQv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Google Is Teaching AI to Explain Your Jokes to You",
    link: "https://news.google.com/articles/CAIiECHf4bhM0tg01vr0cTeUgK4qFwgEKg4IACoGCAowis8wMLmCBjCfkLEG?uo=CAUiWWh0dHBzOi8vd3d3LnZpY2UuY29tL2VuL2FydGljbGUvazd3OWp2L2dvb2dsZS1pcy10ZWFjaGluZy1haS10by1leHBsYWluLXlvdXItam9rZXMtdG8teW910gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Why is IBM selling post-quantum crypto when it's still a pre-quantum company?",
    link: "https://news.google.com/articles/CAIiEC5guuwv-b3cr1SqckZ0xS0qMwgEKioIACIQyKvy0DxcsbRLQKQhOygtHCoUCAoiEMir8tA8XLG0S0CkITsoLRww7bLrBg?uo=CAUiOmh0dHBzOi8vd3d3LnRoZXJlZ2lzdGVyLmNvbS8yMDIyLzA0LzExL29waW5pb25fY29sdW1uX2libS_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Google AI Researchers Propose a Meta-Algorithm, Jump Start Reinforcement Learning, That Uses Prior Policies to Create a Learning Curriculum That Improves Performance",
    link: "https://news.google.com/articles/CBMizAFodHRwczovL3d3dy5tYXJrdGVjaHBvc3QuY29tLzIwMjIvMDQvMTAvZ29vZ2xlLWFpLXJlc2VhcmNoZXJzLXByb3Bvc2UtYS1tZXRhLWFsZ29yaXRobS1qdW1wLXN0YXJ0LXJlaW5mb3JjZW1lbnQtbGVhcm5pbmctdGhhdC11c2VzLXByaW9yLXBvbGljaWVzLXRvLWNyZWF0ZS1hLWxlYXJuaW5nLWN1cnJpY3VsdW0tdGhhdC1pbXByb3Zlcy1wZXJmb3JtYW5jZS_SAQA",
  },
  {
    heading: "Review: Vizy Linux-Powered AI Camera",
    link: "https://news.google.com/articles/CAIiEP-F7P4X4AP9UHexV2XSDzEqGQgEKhAIACoHCAow-vmECzDCg4IDMMWChQY?uo=CAUiRGh0dHBzOi8vaGFja2FkYXkuY29tLzIwMjIvMDQvMTEvcmV2aWV3LXZpenktbGludXgtcG93ZXJlZC1haS1jYW1lcmEv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Do Humans and AI Think Alike?",
    link: "https://news.google.com/articles/CBMiNmh0dHBzOi8vc2NpdGVjaGRhaWx5LmNvbS9kby1odW1hbnMtYW5kLWFpLXRoaW5rLWFsaWtlL9IBAA",
  },
  {
    heading:
      "Prometheus AI, The Trading Bot That Is Gaining Fast Popularity Amongst Beginner Traders This 2022 | Crypto ...",
    link: "https://news.google.com/articles/CAIiEJ9y8otAjmecr7Zru_dxGFMqMwgEKioIACIQABJvHFz_L0ijbnKvWqMpuCoUCAoiEAASbxxc_y9Io25yr1qjKbgwr7zqBg?uo=CAUif2h0dHBzOi8vd3d3LmNyeXB0b3BvbGl0YW4uY29tL3Byb21ldGhldXMtYWktdGhlLXRyYWRpbmctYm90LXRoYXQtaXMtZ2FpbmluZy1mYXN0LXBvcHVsYXJpdHktYW1vbmdzdC1iZWdpbm5lci10cmFkZXJzLXRoaXMtMjAyMi_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Analog A.I.? It sounds crazy, but it might be the future",
    link: "https://news.google.com/articles/CBMiUWh0dHBzOi8vd3d3LmRpZ2l0YWx0cmVuZHMuY29tL2NvbXB1dGluZy9teXRoaWMtYWktYW5hbG9nLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlL9IBVWh0dHBzOi8vd3d3LmRpZ2l0YWx0cmVuZHMuY29tL2NvbXB1dGluZy9teXRoaWMtYWktYW5hbG9nLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLz9hbXA",
  },
  {
    heading:
      "Researchers, Including Yann Lecun, Propose 'projUNN': An Efficient Method For Training Deep Neural Networks With Unitary Matrices",
    link: "https://news.google.com/articles/CBMipQFodHRwczovL3d3dy5tYXJrdGVjaHBvc3QuY29tLzIwMjIvMDQvMDkvcmVzZWFyY2hlcnMtaW5jbHVkaW5nLXlhbm4tbGVjdW4tcHJvcG9zZS1wcm9qdW5uLWFuLWVmZmljaWVudC1tZXRob2QtZm9yLXRyYWluaW5nLWRlZXAtbmV1cmFsLW5ldHdvcmtzLXdpdGgtdW5pdGFyeS1tYXRyaWNlcy_SAakBaHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDIyLzA0LzA5L3Jlc2VhcmNoZXJzLWluY2x1ZGluZy15YW5uLWxlY3VuLXByb3Bvc2UtcHJvanVubi1hbi1lZmZpY2llbnQtbWV0aG9kLWZvci10cmFpbmluZy1kZWVwLW5ldXJhbC1uZXR3b3Jrcy13aXRoLXVuaXRhcnktbWF0cmljZXMvP2FtcA",
  },
  {
    heading: "Why OpenAI recruited human contractors to improve GPT-3",
    link: "https://news.google.com/articles/CAIiEHRZSYDnjk3vHi0S5rWKS_QqMwgEKioIACIQyKvy0DxcsbRLQKQhOygtHCoUCAoiEMir8tA8XLG0S0CkITsoLRww7bLrBg?uo=CAUiP2h0dHBzOi8vd3d3LnRoZXJlZ2lzdGVyLmNvbS8yMDIyLzA0LzA5L29wZW5haV9ncHQzX2NvbnRyYWN0b3JzL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "AI pioneer suggests trickle-down approach to machine learning",
    link: "https://news.google.com/articles/CAIiEHIDed31wddFFApckBTDMFEqMwgEKioIACIQyKvy0DxcsbRLQKQhOygtHCoUCAoiEMir8tA8XLG0S0CkITsoLRww7bLrBg?uo=CAUiQGh0dHBzOi8vd3d3LnRoZXJlZ2lzdGVyLmNvbS8yMDIyLzA0LzA5L2FpX3RyaWNrbGVkb3duX2Vjb25vbWljcy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Man Gets Tattoo of Art Created by Neural Network",
    link: "https://news.google.com/articles/CBMiPmh0dHBzOi8vZnV0dXJpc20uY29tL3RoZS1ieXRlL3RhdHRvby1jcmVhdGVkLWJ5LW5ldXJhbC1uZXR3b3Jr0gE5aHR0cHM6Ly9mdXR1cmlzbS5jb20vdGF0dG9vLWNyZWF0ZWQtYnktbmV1cmFsLW5ldHdvcmsvYW1w",
  },
  {
    heading: "Man Gets World’s First AI-Designed Tattoo, Made By DALL-E2",
    link: "https://news.google.com/articles/CBMiRmh0dHBzOi8vZm9zc2J5dGVzLmNvbS93b3JsZHMtZmlyc3QtYWktdGF0dG9vLWRhbGwtZTItYWktc3lzdGVtLW9wZW5haS_SAUpodHRwczovL2Zvc3NieXRlcy5jb20vd29ybGRzLWZpcnN0LWFpLXRhdHRvby1kYWxsLWUyLWFpLXN5c3RlbS1vcGVuYWkvYW1wLw",
  },
  {
    heading:
      "Johns Hopkins' heart-scanning AI predicts cardiac arrests up to 10 years ahead",
    link: "https://news.google.com/articles/CBMibWh0dHBzOi8vd3d3LmZpZXJjZWJpb3RlY2guY29tL21lZHRlY2gvam9obnMtaG9wa2lucy1oZWFydC1zY2FubmluZy1haS1wcmVkaWN0cy1jYXJkaWFjLWFycmVzdHMtMTAteWVhcnMtYWhlYWTSAQA",
  },
  {
    heading:
      "First-of-its-kind tech accurately predicts if - and when - someone will suffer cardiac arrest",
    link: "https://news.google.com/articles/CAIiENxKaOHEPqs5vTL_hI-kSXgqMwgEKioIACIQ0gQH-j8UG1r6B8re9E7OkCoUCAoiENIEB_o_FBta-gfK3vROzpAw3_D_Bg",
  },
  {
    heading:
      "New blood test could predict a person’s risk of stroke within the next four years",
    link: "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LmV4cHJlc3MuY28udWsvbGlmZS1zdHlsZS9oZWFsdGgvMTU5NDkyOS9zdHJva2Utcmlzay13aXRoaW4tbmV4dC1mb3VyLXllYXJzLWJsb29kLXRlc3TSAWVodHRwczovL3d3dy5leHByZXNzLmNvLnVrL2xpZmUtc3R5bGUvaGVhbHRoLzE1OTQ5Mjkvc3Ryb2tlLXJpc2std2l0aGluLW5leHQtZm91ci15ZWFycy1ibG9vZC10ZXN0L2FtcA",
  },
  {
    heading:
      "Prevencio's AI blood test predicts cardiovascular risk one year out for people with diabetes: study",
    link: "https://news.google.com/articles/CBMif2h0dHBzOi8vd3d3LmZpZXJjZWJpb3RlY2guY29tL21lZHRlY2gvcHJldmVuY2lvcy1haS1ibG9vZC10ZXN0LXByZWRpY3RzLWNhcmRpb3Zhc2N1bGFyLXJpc2tzLW9uZS15ZWFyLW91dC1wZW9wbGUtZGlhYmV0ZXMtc3R1ZHnSAQA",
  },
  {
    heading:
      "New blood test can predict risk of stroke, heart failure four years before it happens",
    link: "https://news.google.com/articles/CBMijgFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2hlYWx0aC9zdG9yeS9uZXctYmxvb2QtdGVzdC1jYW4tcHJlZGljdC1yaXNrLW9mLXN0cm9rZS1oZWFydC1mYWlsdXJlLWZvdXIteWVhcnMtYmVmb3JlLWl0LWhhcHBlbnMtMTkzNjQ3My0yMDIyLTA0LTEy0gGSAWh0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vYW1wL2hlYWx0aC9zdG9yeS9uZXctYmxvb2QtdGVzdC1jYW4tcHJlZGljdC1yaXNrLW9mLXN0cm9rZS1oZWFydC1mYWlsdXJlLWZvdXIteWVhcnMtYmVmb3JlLWl0LWhhcHBlbnMtMTkzNjQ3My0yMDIyLTA0LTEy",
  },
  {
    heading: "China uses AI software to improve its surveillance capabilities",
    link: "https://news.google.com/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2NoaW5hL2NoaW5hLXVzZXMtYWktc29mdHdhcmUtaW1wcm92ZS1pdHMtc3VydmVpbGxhbmNlLWNhcGFiaWxpdGllcy0yMDIyLTA0LTA4L9IBAA",
  },
  {
    heading:
      "Scientists Develop AI Camera That Can Shoot Full Color in Total Darkness",
    link: "https://news.google.com/articles/CAIiEF-z7XRA6dZa3ggbvr625xYqMwgEKioIACIQwY3zDKMjG3ZRv3blc-FEryoUCAoiEMGN8wyjIxt2Ub925XPhRK8w05bwBg?uo=CAUiamh0dHBzOi8vcGV0YXBpeGVsLmNvbS8yMDIyLzA0LzA4L3NjaWVudGlzdHMtZGV2ZWxvcC1haS1jYW1lcmEtdGhhdC1jYW4tc2hvb3QtZnVsbC1jb2xvci1pbi10b3RhbC1kYXJrbmVzcy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Nvidia’s Next GPU Shows That Transformers Are Transforming AI",
    link: "https://news.google.com/articles/CAIiEFat9rxTVjfAAwFzquL1eWgqMwgEKioIACIQmdeZ12vAlXdtdcHy0XNTdioUCAoiEJnXmddrwJV3bXXB8tFzU3YwtNrOBw?uo=CAUiVmh0dHBzOi8vc3BlY3RydW0uaWVlZS5vcmcvbnZpZGlhcy1uZXh0LWdwdS1zaG93cy10aGF0LXRyYW5zZm9ybWVycy1hcmUtdHJhbnNmb3JtaW5nLWFp0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "22 open source datasets to boost AI modeling",
    link: "https://news.google.com/articles/CAIiEFUhmfEWhvcKc3tVL0ErEdgqEwgEKgwIACoFCAowsGkw8AYwgxM?uo=CAUiVWh0dHBzOi8vdmVudHVyZWJlYXQuY29tLzIwMjIvMDQvMDcvMjItb3Blbi1zb3VyY2UtZGF0YXNldHMtdG8tZnVlbC15b3VyLW5leHQtcHJvamVjdC_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Listen: Artificial Intelligence Generates a Joe Bonamassa-Style Blues Song",
    link: "https://news.google.com/articles/CBMihgFodHRwczovL3d3dy51bHRpbWF0ZS1ndWl0YXIuY29tL25ld3MvZ2VuZXJhbF9tdXNpY19uZXdzL2xpc3Rlbl9hcnRpZmljaWFsX2ludGVsbGlnZW5jZV9nZW5lcmF0ZXNfYV9qb2VfYm9uYW1hc3NhLXN0eWxlX2JsdWVzX3NvbmcuaHRtbNIBAA",
  },
  {
    heading: "New Salesforce AI chief eyes a future with voice-driven coding",
    link: "https://news.google.com/articles/CAIiEGAV65uM7G5LP2lKlHP7EEgqFAgEKg0IACoGCAowlIEBMLEXMOc_?uo=CAUiYWh0dHBzOi8vdGVjaGNydW5jaC5jb20vMjAyMi8wNC8wNy9uZXctc2FsZXNmb3JjZS1haS1jaGllZi1leWVzLWEtZnV0dXJlLXdpdGgtdm9pY2UtZHJpdmVuLWNvZGluZy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Viz.AI nabs $100M to grow its AI for reading CT scans",
    link: "https://news.google.com/articles/CBMiYWh0dHBzOi8vd3d3LmZpZXJjZWJpb3RlY2guY29tL21lZHRlY2gvdml6YWktY29sbGVjdHMtMTAwbS1ncm93LWl0cy1lbWVyZ2VuY3ktc2Nhbi1yZWFkaW5nLWFpLXRlY2jSAQA",
  },
  {
    heading:
      "Israeli startup Viz.ai nabs $100m for AI tech that detects brain conditions in scans",
    link: "https://news.google.com/articles/CBMicmh0dHBzOi8vd3d3LnRpbWVzb2Zpc3JhZWwuY29tL2lzcmFlbGktc3RhcnR1cC12aXotYWktbmFicy0xMDBtLWZvci1haS10ZWNoLXRoYXQtZGV0ZWN0cy1icmFpbi1jb25kaXRpb25zLWluLXNjYW5zL9IBdmh0dHBzOi8vd3d3LnRpbWVzb2Zpc3JhZWwuY29tL2lzcmFlbGktc3RhcnR1cC12aXotYWktbmFicy0xMDBtLWZvci1haS10ZWNoLXRoYXQtZGV0ZWN0cy1icmFpbi1jb25kaXRpb25zLWluLXNjYW5zL2FtcC8",
  },
  {
    heading: "China’s AI Development Catching Up to US – TechCrunch",
    link: "https://news.google.com/articles/CBMiSWh0dHBzOi8vd3d3LmFzaWFmaW5hbmNpYWwuY29tL2NoaW5hLWFpLWRldmVsb3BtZW50LWNhdGNoaW5nLXVwLXRlY2hjcnVuY2jSAU1odHRwczovL3d3dy5hc2lhZmluYW5jaWFsLmNvbS9jaGluYS1haS1kZXZlbG9wbWVudC1jYXRjaGluZy11cC10ZWNoY3J1bmNoL2FtcA",
  },
  {
    heading:
      "Halo TV Show Changes Cortana's Origin &amp; Purpose In 6 Major Ways",
    link: "https://news.google.com/articles/CAIiEKTYv4vLgcZbrJgpJ7RtCkEqGQgEKhAIACoHCAownqWBCzD44fwCMLmjtwY?uo=CAUiRWh0dHBzOi8vc2NyZWVucmFudC5jb20vaGFsby1zaG93LWNvcnRhbmEtb3JpZ2luLXBvd2Vycy1zdG9yeS1jaGFuZ2VzL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "IQVIA doesn't yet have the golden egg of AI, but it's in 'incubation'",
    link: "https://news.google.com/articles/CBMia2h0dHBzOi8vd3d3LmZpZXJjZWJpb3RlY2guY29tL2Nyby9pcXZpYS1kb2VzLW5vdC15ZXQtaGF2ZS1nb2xkZW4tZWdnLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLWl0cy1pbmN1YmF0aW9u0gEA",
  },
  {
    heading:
      "(VIDEO) Artificial Intelligence Image Generator Funded By Elon Musk Transforms Eureka's 'Pink Lady' Victorian Into a Work of Modern Architecture",
    link: "https://news.google.com/articles/CAIiEAB6TjXOeKPb_KWJlA_HNMwqGQgEKhAIACoHCAow5qCZCzCGq7EDMO_j1QY?uo=CAUiXGh0dHBzOi8vbG9zdGNvYXN0b3V0cG9zdC5jb20vMjAyMi9hcHIvMTMvdmlkZW8tYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtaW1hZ2UtZ2VuZXJhdG9yLWZ1bmQv0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Top 5 Ways in which Supercomputers have Changed Our Lives",
    link: "https://news.google.com/articles/CAIiEEzeL2EZyVpHMtdE0pmZhBEqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiW2h0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L3RvcC01LXdheXMtaW4td2hpY2gtc3VwZXJjb21wdXRlcnMtaGF2ZS1jaGFuZ2VkLW91ci1saXZlcy_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Uniphore Acquires Ai-based Knowledge Automation Firm Colabo | Mint",
    link: "https://news.google.com/articles/CAIiEOV6QjIg3SSo547jVXhv4FYqFggEKg4IACoGCAowxLQ_MNevCDCkoh8?uo=CAUicmh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9jb21wYW5pZXMvdW5pcGhvcmUtYWNxdWlyZXMtYWktYmFzZWQta25vd2xlZGdlLWF1dG9tYXRpb24tZmlybS1jb2xhYm8tMTE2NDk4NjIxNDcyMjYuaHRtbNIBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Northwell Health joint venture investing $100 million in AI startups to tackle health inequities",
    link: "https://news.google.com/articles/CBMigAFodHRwczovL3d3dy5maWVyY2VoZWFsdGhjYXJlLmNvbS9oZWFsdGgtdGVjaC9ub3J0aHdlbGwtaGVhbHRoLWJhY2tlZC1qdi13aWxsLWludmVzdC0xMDBtLWFpLWNvbXBhbmllcy10YWNrbGluZy1oZWFsdGgtaW5lcXVpdGllc9IBAA",
  },
  {
    heading:
      "DataRobot's No Code AI: Now Quickly Turn Any Model into AI Application",
    link: "https://news.google.com/articles/CAIiEPLZcK24CEH3UNxQAumhtKUqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiZmh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2RhdGFyb2JvdHMtbm8tY29kZS1haS1ub3ctcXVpY2tseS10dXJuLWFueS1tb2RlbC1pbnRvLWFpLWFwcGxpY2F0aW9uL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "AI Pair Programmer: Why Copilot won't Make it to the End?",
    link: "https://news.google.com/articles/CAIiEP826_WBzZGjnEXgaaDqh14qMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiWGh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2FpLXBhaXItcHJvZ3JhbW1lci13aHktY29waWxvdC13b250LW1ha2UtaXQtdG8tdGhlLWVuZC_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Panera will test an AI coffee system from the makers of the Flippy burger bot",
    link: "https://news.google.com/articles/CAIiEBdwJ3LKP2rckrTCcEXZPJYqGAgEKg8IACoHCAowwOjjAjDp3xsw_oySBw?uo=CAUiXWh0dHBzOi8vd3d3LmVuZ2FkZ2V0LmNvbS9taXNvLXJvYm90aWNzLXBhbmVyYS1icmVhZC1zbWFydC1jb2ZmZWUtbWFraW5nLXN5c3RlbS0xMjAwMzI4OTcuaHRtbNIBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "‘ai Can Help Personalize Offline Experiences As Well’ | Mint",
    link: "https://news.google.com/articles/CAIiENX5s9StP1MjO09P_rlg1jsqFggEKg4IACoGCAowxLQ_MNevCDCkoh8?uo=CAUicWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9jb21wYW5pZXMvcGVvcGxlL2FpLWNhbi1oZWxwLXBlcnNvbmFsaXplLW9mZmxpbmUtZXhwZXJpZW5jZXMtYXMtd2VsbC0xMTY0OTYxMTUyNzM5MC5odG1s0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading: "Dell, Nvidia, AMD to power new Ohio AI compute cluster",
    link: "https://news.google.com/articles/CAIiEI4wIGyfXTcUDWRHDHU3tzQqMwgEKioIACIQyKvy0DxcsbRLQKQhOygtHCoUCAoiEMir8tA8XLG0S0CkITsoLRww7bLrBg?uo=CAUiQGh0dHBzOi8vd3d3LnRoZXJlZ2lzdGVyLmNvbS8yMDIyLzA0LzEzL2RlbGxfbnZpZGlhX2FtZF90b19wb3dlci_SAQA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Eliminating AI Bias: Human Intelligence is Not the Ultimate Solution",
    link: "https://news.google.com/articles/CAIiEGSGZMhDvBle6YDWQhg4JPwqMwgEKioIACIQMPRl7vyjDFV022LrXVE29CoUCAoiEDD0Ze78owxVdNti611RNvQwg_GJBw?uo=CAUiZWh0dHBzOi8vd3d3LmFuYWx5dGljc2luc2lnaHQubmV0L2VsaW1pbmF0aW5nLWFpLWJpYXMtaHVtYW4taW50ZWxsaWdlbmNlLWlzLW5vdC10aGUtdWx0aW1hdGUtc29sdXRpb24v0gEA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "UCSD and NVIDIA AI Researchers Propose 'CoordGAN': a Novel Disentangled GAN Mode That Produces Dense Correspondence Maps Represented by a Novel Coordinate Space",
    link: "https://news.google.com/articles/CBMixgFodHRwczovL3d3dy5tYXJrdGVjaHBvc3QuY29tLzIwMjIvMDQvMTAvdWNzZC1hbmQtbnZpZGlhLWFpLXJlc2VhcmNoZXJzLXByb3Bvc2UtY29vcmRnYW4tYS1ub3ZlbC1kaXNlbnRhbmdsZWQtZ2FuLW1vZGUtdGhhdC1wcm9kdWNlcy1kZW5zZS1jb3JyZXNwb25kZW5jZS1tYXBzLXJlcHJlc2VudGVkLWJ5LWEtbm92ZWwtY29vcmRpbmF0ZS1zcGFjZS_SAcoBaHR0cHM6Ly93d3cubWFya3RlY2hwb3N0LmNvbS8yMDIyLzA0LzEwL3Vjc2QtYW5kLW52aWRpYS1haS1yZXNlYXJjaGVycy1wcm9wb3NlLWNvb3JkZ2FuLWEtbm92ZWwtZGlzZW50YW5nbGVkLWdhbi1tb2RlLXRoYXQtcHJvZHVjZXMtZGVuc2UtY29ycmVzcG9uZGVuY2UtbWFwcy1yZXByZXNlbnRlZC1ieS1hLW5vdmVsLWNvb3JkaW5hdGUtc3BhY2UvP2FtcA",
  },
  {
    heading:
      "Meet the winners of Women in AI Leadership Awards at The Rising 2022",
    link: "https://news.google.com/articles/CAIiEIWOxILuXIxHArWK0YkI3ysqGQgEKhAIACoHCAowiv6GCzDhmIUDMN2EwAY?uo=CAUiY2h0dHBzOi8vYW5hbHl0aWNzaW5kaWFtYWcuY29tL21lZXQtdGhlLXdpbm5lcnMtb2Ytd29tZW4taW4tYWktbGVhZGVyc2hpcC1hd2FyZHMtYXQtdGhlLXJpc2luZy0yMDIyL9IBAA&hl=en-PK&gl=PK&ceid=PK%3Aen",
  },
  {
    heading:
      "Decide what you want from AI before it makes the decision for you",
    link: "https://news.google.com/articles/CBMibmh0dHBzOi8vd3d3LnRoZXRpbWVzLmNvLnVrL2FydGljbGUvZGVjaWRlLXdoYXQteW91LXdhbnQtZnJvbS1haS1iZWZvcmUtaXQtbWFrZXMtdGhlLWRlY2lzaW9uLWZvci15b3UtNnAwamwwYzNy0gEA",
  },
  {
    heading:
      "Why it's important for Australia to build sovereign capability in AI",
    link: "https://news.google.com/articles/CBMiZmh0dHBzOi8vd3d3LmFzcGlzdHJhdGVnaXN0Lm9yZy5hdS93aHktaXRzLWltcG9ydGFudC1mb3ItYXVzdHJhbGlhLXRvLWJ1aWxkLXNvdmVyZWlnbi1jYXBhYmlsaXR5LWluLWFpL9IBAA",
  },
  {
    heading:
      "Fans of Val Kilmer Can Hear His Voice Again Thanks to Artificial Intelligence",
    link: "https://news.google.com/articles/CBMiSWh0dHBzOi8vd3d3LnlhaG9vLmNvbS9saWZlc3R5bGUvZmFucy12YWwta2lsbWVyLWhlYXItdm9pY2UtMTQwMDAwMDEyLmh0bWzSAVFodHRwczovL3d3dy55YWhvby5jb20vYW1waHRtbC9saWZlc3R5bGUvZmFucy12YWwta2lsbWVyLWhlYXItdm9pY2UtMTQwMDAwMDEyLmh0bWw",
  },
];
export default text;
